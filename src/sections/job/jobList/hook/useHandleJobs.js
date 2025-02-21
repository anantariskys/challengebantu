import { getAllJob } from "@/api/services/job";
import { useState } from "react";

export const useHandleJobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allJob, setAllJob] = useState([]);
  const handleGetAllJob = async () => {
    try {
      setIsLoading(true);
      const response = await getAllJob();
      const result = await response.data;
      setAllJob(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleGetAllJob, allJob, isLoading };
};
