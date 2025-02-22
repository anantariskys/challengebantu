import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useCategoryJobStore from "@/store/useCategoryJobStore";
import JobCard from "@/sections/job/jobList/components/JobCard";

const RelatedJobs = ({ category }) => {
  const { jobs, fetchCategoryJobs} =useCategoryJobStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchCategoryJobs(category).finally(() => {
      setTimeout(() => setLoading(false), 2000);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-[#0A142F]">Related Jobs</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard area={job.area} key={job.id} company={job.company} id={job.id} image={job.image} location={job.location} name={job.name} salary={job.salary}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
