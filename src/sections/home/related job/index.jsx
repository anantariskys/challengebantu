import React, { useState, useEffect } from "react";
import { getAllJob } from "@/api/core";
import { Icon } from "@iconify/react";

const RelatedJobs = ({ category }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJob();
        // Filter berdasarkan kategori yang diterima sebagai prop
        const filteredJobs = response.data.filter(
          (job) => job.category === category
        );
        setJobs(filteredJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Gagal mengambil pekerjaan terkait.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [category]);

  if (loading) return <p>Loading related jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-[#0A142F]">Related Jobs</h1>
        <div className="flex gap-2">
          {/* Tombol navigasi (optional) */}
          <button className="p-3 bg-[#E8F1FF] rounded-lg hover:bg-blue-100 transition-colors">
            {/* SVG */}
          </button>
          <button className="p-3 bg-[#E8F1FF] rounded-lg hover:bg-blue-100 transition-colors">
            {/* SVG */}
          </button>
        </div>
      </section>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={job.logo || "/default-logo.png"}
                  alt={`${job.company} Logo`}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-medium text-gray-800">
                  {job.company}
                </span>
              </div>
              <span className="flex items-center text-sm text-gray-500">
                <Icon icon="ion:location-outline" className="mr-1 w-5 h-5" />
                {job.location}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
            <div className="flex justify-between items-center">
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  job.jobType === "Full Time"
                    ? "text-blue-600 bg-blue-100"
                    : job.jobType === "Part Time"
                    ? "text-purple-600 bg-purple-100"
                    : "text-green-600 bg-green-100"
                }`}
              >
                {job.jobType}
              </span>
              <p className="text-blue-600 font-bold">{job.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
