"use client";
import React from "react";
import FindJobSection from "./FindJobSection";
import SearchSection from "../../components/SearchSection";
import JobCard from "./JobCard";
import CategorySection from "./CategorySection";
import ReactPaginate from "react-paginate";

const page = () => {
  return (
    <div>
      <FindJobSection />
      <div className="container  md:py-6  lg:py-8">
        <CategorySection />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3  lg:gap-6">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <ReactPaginate
          pageCount={25}
          nextLabel={">>"}
          breakLabel={"..."}
          previousLabel={"<<"}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          containerClassName="flex items-center justify-center gap-3 py-6"
          activeClassName="bg-blue-500 text-white"
          pageClassName="rounded-full font-semibold size-6 flex items-center justify-center lg:size-8"
        />
      </div>
    </div>
  );
};

export default page;
