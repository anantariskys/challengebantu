"use client"

import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { getAllJob } from "@/api/services/job";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [locations, setLocations] = useState(["All"]);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJob();
        setJobs(response.data);
        const uniqueLocations = [...new Set(response.data.map(job => job.location))];
        setLocations(["All", ...uniqueLocations]);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      let filtered = jobs.filter(job => 
        job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (selectedLocation !== "All") {
        filtered = filtered.filter(job => 
          job.location === selectedLocation
        );
      }

      setFilteredJobs(filtered);
      setShowSearchDropdown(true);
    } else {
      setFilteredJobs([]);
      setShowSearchDropdown(false);
    }
  }, [searchTerm, jobs, selectedLocation]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleJobSelect = (job) => {
    setSearchTerm(job.name);
    setShowSearchDropdown(false);
    router.push(`/job/${job.id}`);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setSearchTerm(""); // Reset search term
  };

  return (
    <div className="container py-4 flex justify-between items-center relative">
      <div className="flex items-center gap-1 md:gap-4">
        <a href="/">
          <div className="flex items-center gap-1">
            <Icon icon={"tabler:briefcase"} className="text-blue-500 size-6 md:size-10" />
            <h1 className="font-bold md:text-xl">Bantu</h1>
          </div>
        </a>
        <div className="flex items-center border p-2 rounded-md gap-1 md:p-4 lg:gap-4 lg:px-6 lg:w-[668px] relative">
          <div className="w-auto flex flex-row justify-center items-center gap-1 cursor-pointer">
            <img src="/earth.svg" alt="flag" className="w-4 md:w-6" />
            <div 
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="relative flex flex-row" ref={dropdownRef}>
              <p className="font-semibold text-xs md:text-sm">
                {selectedLocation}
              </p>
              <Icon icon={"mdi:chevron-down"} className="lg:size-6 border-r" />
              {showLocationDropdown && (
                <div className="absolute bg-white shadow-lg rounded-sm mt-10 -ml-10 z-50 max-h-60 overflow-y-auto">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        handleLocationChange(location);
                        setShowLocationDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center w-full relative pl-3" ref={searchRef}>
            <Icon icon={"mingcute:search-line"} className="text-blue-500 lg:size-6" />
            <input 
              type="text" 
              placeholder="Job title, keyword, company" 
              value={searchTerm}
              onChange={handleSearchChange}
              className="placeholder:text-xs focus:outline-none text-xs md:text-sm md:placeholder:text-sm lg:w-[200px] w-full"
            />
            {showSearchDropdown && filteredJobs.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-50 max-h-60 overflow-y-auto">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id} 
                    onClick={() => handleJobSelect(job)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{job.name}</span>
                      <span className="text-sm text-gray-500">{job.company}</span>
                    </div>
                    <p className="text-xs text-gray-500">{job.category}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:gap-2">
        <Icon icon={"mdi:bell-outline"} className="size-6" />
        <img src="/user.png" alt="user" className="md:size-8 lg:size-12" />
      </div>
    </div>
  );
};

export default SearchSection;
