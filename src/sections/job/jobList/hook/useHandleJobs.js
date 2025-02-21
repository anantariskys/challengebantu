import { getAllJob } from "@/api/services/job";
import { useState, useEffect } from "react";

export const useHandleJobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allJob, setAllJob] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState('latest');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const handleGetAllJob = async () => {
    try {
      setIsLoading(true);
      const response = await getAllJob();
      const result = await response.data;
      setAllJob(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterAndSort = (searchParams) => {
    let result = allJob;

    if (searchParams?.jobTitle) {
      result = result.filter(job => 
        job.name.toLowerCase().includes(searchParams.jobTitle.toLowerCase())
      );
    }

    if (searchParams?.location) {
      result = result.filter(job => 
        job.location.toLowerCase().includes(searchParams.location.toLowerCase())
      );
    }

    if (searchParams?.category) {
      result = result.filter(job => 
        job.category.toLowerCase() === searchParams.category.toLowerCase()
      );
    }

    result = result.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

    setFilteredJobs(result);
  };

  useEffect(() => {
    handleGetAllJob();
  }, []);

  const pageCount = Math.ceil(filteredJobs.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentJobs = filteredJobs.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(0);
  };

  return { 
    handleGetAllJob,
    allJob,
    isLoading,
    filteredJobs,
    currentJobs,
    pageCount,
    handlePageChange,
    handleSortChange,
    handleItemsPerPageChange,
    handleFilterAndSort,
    sortOrder,
    itemsPerPage,
    currentPage
  };
};
