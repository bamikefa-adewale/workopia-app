/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobData } from "../components/JobData";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(jobData);

  const job = jobs.find((job) => job.id === Number(id));

  const [formData, setFormData] = useState({
    title: job.title,
    description: job.description,
    salary: job.salary,
    location: job.location,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedJobs = jobs.map((job) =>
      job.id === Number(id) ? { ...job, ...formData } : job
    );
    setJobs(updatedJobs);
    navigate(`/job/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block font-bold mb-2">Job Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Salary</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditJob;
