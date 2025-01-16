/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useGetJobs } from "../hooks/useGetJobs";
import JobCard from "./JobCard";

const JobListings = ({ searchQuery }) => {
  const { data: jobs, isPending, error } = useGetJobs();
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [filteredJob, setFilteredJob] = useState([]);

  useEffect(() => {
    console.log("Jobs data received:", jobs);
    console.log("Search query:", searchQuery);

    if (jobs) {
      const filtered = jobs.filter((job) => {
        const matchesKeyword = searchQuery.keywords
          ? (job?.jobTile || "")
              .toLowerCase()
              .include(searchQuery.keywords.toLowerCase())
          : true;
        const matcheslocation = searchQuery.location
          ? (job?.address || "")
              .toLowerCase()
              .include(searchQuery.location.toLowerCase())
          : true;
        return matchesKeyword && matcheslocation;
      });
      setFilteredJob(filtered);
    }
  }, [jobs, searchQuery]);

  console.log(jobs);

  const handleShowAll = () => {
    setVisibleJobs(filteredJob.length); // Show all jobs
  };

  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          <h1> Recent Jobs</h1>
        </div>
        {isPending && (
          <h1 className="text-blue-700 text-lg flex justify-center font-semibold">
            Loading...
          </h1>
        )}
        {error && (
          <div className="text-red-700">Error message: {error.message}</div>
        )}
        {!isPending && !error && filteredJob.length === 0 && (
          <div className="text-red-700">No jobs available...</div>
        )}
        {!isPending && !error && filteredJob.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {filteredJob.slice(0, visibleJobs).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        )}
        {!error && visibleJobs < filteredJob?.length && (
          <div className="items-center flex justify-center">
            <button
              onClick={handleShowAll}
              disabled={isPending}
              className="bg-blue-700 text-white py-4 px-2 rounded-md text-xl text-center"
            >
              <span className="flex gap-2 items-center">
                <CiLocationArrow1 />
                {isPending ? "Loading" : "   Show All Jobs"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
