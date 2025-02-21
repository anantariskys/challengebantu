"use client";
import React from "react";
import FindJobSection from "@/sections/job/findJob";
import JobList from "@/sections/job/jobList";

const page = () => {
  return (
    <section>
      <FindJobSection />
      <JobList />
    </section>
  );
};

export default page;
