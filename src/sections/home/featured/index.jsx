"use client";
import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/SectionLayout";
import Card from "./components/Card";
import useFeaturedJobStore from "@/store/useFeaturedJobStore";
import SkeletonCard from "./components/SkeletonCard";
import Button from "@/components/Button";

const FeaturedJob = () => {
  const { jobs, fetchFeaturedJobs, nextPage, prevPage, page, totalPages } =
    useFeaturedJobStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFeaturedJobs().finally(() => {
      setTimeout(() => setLoading(false), 2000);
    });
  }, []);

  return (
    <SectionLayout link="/job" border={"border-t"} title={"Featured job"}>
      <main className="grid gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : jobs.map((item, index) => <Card key={index} item={item} />)}
      </main>
      <div className="flex justify-between mt-4">
        <Button

          onClick={prevPage}
          disabled={page === 1}
          className="text-sm disabled:opacity-50"
        >
          Previous
        </Button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={nextPage}
          disabled={page === totalPages}
          className="text-sm disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </SectionLayout>
  );
};

export default FeaturedJob;
