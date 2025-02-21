"use client";
import { useEffect } from "react";
import CategorySection from "./components/CategorySection";
import JobCard from "./components/JobCard";
import { useHandleJobs } from "./hook/useHandleJobs";
import CardSkeleton from "./components/CardSkeleton";
import Pagination from "./components/Pagination";

const JobList = ({ searchParams }) => {
  const { 
    allJob,
    isLoading,
    currentJobs,
    pageCount,
    handlePageChange,
    handleSortChange,
    handleItemsPerPageChange,
    handleFilterAndSort,
    sortOrder,
  } = useHandleJobs();

  useEffect(() => {
    handleFilterAndSort(searchParams);
  }, [searchParams, allJob, sortOrder]);

  return (
    <div className="container md:py-6 lg:py-8">
      <CategorySection 
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-6">
          {currentJobs.map((job) => (
            <JobCard 
              key={job.id} 
              location={job.location} 
              id={job.id} 
              name={job.name} 
              area={job.area} 
              salary={job.salary} 
              image={job.image} 
              company={job.company} 
            />
          ))}
        </div>
      )}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default JobList;
