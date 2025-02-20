import core from "../core";

const getAllJob = async () => {
    return await core.get("/job");
};

const getJobById = async (id) => {
    return await core.get(`/job/${id}`);
};

export { getAllJob, getJobById };

