"use client";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getJobById } from "@/api/services/job";
import LoadingDetail from "@/components/loadingSkeleton";
import Breadcrumbs from "@/sections/jobDetails/breadcrumbs";
import Header from "@/sections/jobDetails/header";
import NotFoundJob from "@/sections/jobDetails/notFoundJob";
import MainBody from "@/sections/jobDetails/mainBody";
import RelatedJobs from "@/sections/jobDetails/related job";

const page = () => {
  const { id } = useParams();
  const [jobDataId, setJobDataId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        const job = await getJobById(id);
        setJobDataId(job.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };
    id !== 'id' ? fetchJobDetail() : <NotFoundJob /> && setLoading(false);
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <>
      { loading ?  ( 
        <LoadingDetail />
      ) : jobDataId ? (
      <>
        <div className="flex flex-col gap-10 -mt-10">
          <ToastContainer />
          <Breadcrumbs id={id} />
          <Header jobDataId={jobDataId} formatDate={formatDate} />
          <MainBody jobDataId={jobDataId} formatDate={formatDate} />
        </div>
        <RelatedJobs category={jobDataId.category}/>

       
      </>
      ) : 
        <NotFoundJob />
      }
    </>
  );
};

export default page;
