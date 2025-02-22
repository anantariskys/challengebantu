import { getAllJob } from "@/api/services/job";
import { create } from "zustand";

const useFeaturedJobStore = create((set) => ({
  allJobs: [], 
  jobs: [], 
  page: 1,
  pageSize: 4, 
  totalPages: 1,
  bookmarks: new Set(), 

  fetchFeaturedJobs: async () => {
    try {
      const response = await getAllJob();
      const featuredJobs = response.data.filter((job) => job.isFeatured);
      const totalPages = Math.ceil(featuredJobs.length / 5);

      set((state) => ({
        allJobs: featuredJobs,
        totalPages: totalPages || 1,
        page: 1,
        jobs: featuredJobs.slice(0, state.pageSize),
      }));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  },

  nextPage: () => set((state) => {
    if (state.page >= state.totalPages) return state;
    
    const nextPage = state.page + 1;
    const startIndex = (nextPage - 1) * state.pageSize;
    const endIndex = startIndex + state.pageSize;

    return {
      page: nextPage,
      jobs: state.allJobs.slice(startIndex, endIndex),
    };
  }),

  prevPage: () => set((state) => {
    if (state.page <= 1) return state;
    
    const prevPage = state.page - 1;
    const startIndex = (prevPage - 1) * state.pageSize;
    const endIndex = startIndex + state.pageSize;

    return {
      page: prevPage,
      jobs: state.allJobs.slice(startIndex, endIndex),
    };
  }),

  toggleBookmark: (id) => set((state) => {
    const newBookmarks = new Set(state.bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    return { bookmarks: newBookmarks };
  }),
}));

export default useFeaturedJobStore;
