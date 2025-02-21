"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import Link from "next/link";
import { getAllJob } from "@/api/services/job";
import Image from "next/image";

const FindJobSection = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllJob();
        const uniqueCategories = [...new Set(response.data.map(job => job.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    onSearch({
      jobTitle,
      location,
      category
    });
  };

  const handleClear = () => {
    handleSearch()
    setJobTitle("");
    setLocation("");
    setCategory("");
  };

  return (
    <div className="bg-[#f1f2f4]">
      <div className="container py-6 lg:py-8">
        <div className="py-2 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Find Job</h2>
          <div className="text-sm">
            <Link href={"/"} className="text-gray-500">
              Home /
            </Link>{" "}
            <Link href={"/job"}>Find Job</Link>
          </div>
        </div>
        <div className="bg-white w-full p-3 rounded-lg grid grid-cols-2 gap-1 gap-y-3 md:grid-cols-4 lg:px-8 lg:py-3">
          <div className="flex items-center gap-1">
            <Icon icon={"mingcute:search-line"} className="text-blue-500 lg:size-6" />
            <input 
              type="text" 
              placeholder="Job title, type, Keyword..." 
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="focus:outline-none text-xs w-20 md:w-full lg:text-base" 
            />
          </div>
          <div className="flex items-center gap-1">
            <Icon icon={"mingcute:location-line"} className="text-blue-500 lg:size-6" />
            <input 
              type="text" 
              placeholder="Location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="focus:outline-none text-xs w-20 md:w-full lg:text-base" 
            />
          </div>
          <div className="flex items-center gap-1">
            <Icon icon={"solar:layers-linear"} className="text-blue-500 lg:size-6" />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="focus:outline-none text-xs md:w-full lg:text-base"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row gap-2 ml-3">
            <button onClick={handleClear}>
              <Image 
                src={"/trash.svg"} 
                alt="Clear" 
                width={37} 
                height={37}
              />
            </button>
            <Button onClick={handleSearch} className={"lg:ms-auto"}>Find Job</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobSection;
