"use client";
import { useEffect, useState } from "react";
import CategorySection from "./components/CategorySection";
import JobCard from "./components/JobCard";
import { useHandleJobs } from "./hook/useHandleJobs";
import CardSkeleton from "./components/CardSkeleton";
import { Suspense } from "react";
import Pagination from "./components/Pagination";

const JobList = () => {
  const { handleGetAllJob, allJob, isLoading } = useHandleJobs();
  useEffect(() => {
    handleGetAllJob();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(allJob.length / 12);
  const offset = currentPage * 12;
  const currentJobs = allJob.slice(offset, offset + 12);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="container  md:py-6  lg:py-8">
      <CategorySection />
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3  lg:gap-6">
          {currentJobs.map((job) => {
            return <JobCard key={job.id} location={job.location} id={job.id} name={job.name} area={job.area} salary={job.salary} image={job.image} company={job.company} />;
          })}
        </div>
      )}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default JobList;
