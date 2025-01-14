import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useGetJobs } from "../hooks/useGetJobs";
import JobCard from "./JobCard";

const JobListings = () => {
  const { data: jobs, isPending, error } = useGetJobs();
  const [visibleJobs, setVisibleJobs] = useState(6); // Initialize with 6 jobs

  if (isPending)
    return <div className="text-blue-700 flex justify-center">Loading...</div>;
  if (error)
    return <div className="text-red-700">Error message: {error.message}</div>;
  if (!jobs || jobs?.length === 0)
    return (
      <div className="ml-[800px] text-3xl text-red-600">
        No jobs available...
      </div>
    );

  const handleShowAll = () => {
    setVisibleJobs(jobs.length); // Show all jobs
  };

  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          Recent Jobs
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {jobs.slice(0, visibleJobs).map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {visibleJobs < jobs.length && ( 
          <div className="items-center flex justify-center">
            <button
              onClick={handleShowAll}
              className="bg-blue-700 text-white py-4 px-2 rounded-md text-xl text-center"
            >
              <span className="flex gap-2 items-center">
                <CiLocationArrow1 />
                Show All Jobs
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
