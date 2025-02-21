import core from "../core";

const getAllJob = async () => {
  return await core.get("https://67b13a313fc4eef538e9667f.mockapi.io/api/job");
};

const getJobById = async (id) => {
  return await core.get(`/job/${id}`);
};

export { getAllJob, getJobById };
