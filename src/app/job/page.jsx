"use client";
import React, { useState } from "react";
import FindJobSection from "@/sections/job/findJob";
import JobList from "@/sections/job/jobList";

const Page = () => {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <section>
      <FindJobSection onSearch={handleSearch} />
      <JobList searchParams={searchParams} />
    </section>
  );
};

export default Page;
