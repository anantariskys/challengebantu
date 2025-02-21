import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getJobById } from "@/api/core"; // pastikan path-nya sesuai
// Import komponen lain seperti CompanyDetail, JobOverview, dll.
import RelatedJobs from "@/components/RelatedJobs"; // Komponen related jobs yang sudah dibuat

const Page = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(true);
  const [errorDetail, setErrorDetail] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await getJobById(id);
        setJobDetail(response.data);
      } catch (err) {
        console.error("Error fetching job detail:", err);
        setErrorDetail("Gagal mengambil detail pekerjaan.");
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loadingDetail) return <p>Loading job details...</p>;
  if (errorDetail) return <p>{errorDetail}</p>;

  return (
    <>
      {/* Bagian Header, Job Overview, CompanyDetail, dsb. */}
      <header>
        {/* Tampilkan data detail pekerjaan, misalnya: */}
        <h1>{jobDetail.title}</h1>
        <p>{jobDetail.description}</p>
        {/* Komponen lainnya */}
      </header>

      {/* Bagian Related Jobs */}
      {/* Pastikan properti category ada di data detail yang diterima dari API */}
      {jobDetail.category && <RelatedJobs category={jobDetail.category} />}
    </>
  );
};

export default Page;
