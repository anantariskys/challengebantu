import { getAllJob } from "@/api/services/job";
import { create } from "zustand";

const useCategoryJobStore = create((set) => ({
  jobs: [],
  loading: false,
  error: null,

  fetchCategoryJobs: async (category) => {
    set({ loading: true, error: null }); 
    try {
      const response = await getAllJob();
      const CategoryJobs = response.data.filter((job) => job.category===category);
      set({ jobs: CategoryJobs, loading: false });
    } catch (error) {
      console.error("Error fetching category jobs:", error);
      set({ error: "Failed to fetch jobs", loading: false });
    }
  },
}));

export default useCategoryJobStore;
