/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useGetJobs } from "../hooks/useGetJobs";
import JobCard from "./JobCard";
import { Button } from "@material-tailwind/react";
import JobCardSkeleton from "./ui/JobCardSkeleton";
import HeadingSkeleton from "./ui/HeadingSkeleton";
import Skeleton from "react-loading-skeleton";

const JobListings = ({ searchQuery }) => {
  const { data: jobs, isPending, error } = useGetJobs();
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [filteredJob, setFilteredJob] = useState([]);

  useEffect(() => {
    if (jobs) {
      const filtered = jobs?.filter((job) => {
        const matchesKeyword = searchQuery?.keywords
          ? job?.jobTitle
              ?.toLowerCase()
              .includes(searchQuery?.keywords?.toLowerCase())
          : true;
        const matchesLocation = searchQuery?.location
          ? job?.address
              ?.toLowerCase()
              .includes(searchQuery?.location?.toLowerCase())
          : true;
        return matchesKeyword && matchesLocation;
      });
      setFilteredJob(filtered);
    }
  }, [jobs, searchQuery]);

  const handleShowAll = () => {
    setVisibleJobs(filteredJob?.length); // Show all jobs
  };

  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          <h1> Recent Jobs</h1>
        </div>

        <h1 className="text-lg flex gap-8 items-center p-2 my-5">
          {isPending ? (
            <HeadingSkeleton />
          ) : (
            <>
              Available Job:
              <Button className="text-white bg-blue-500">
                {filteredJob?.length}
              </Button>
            </>
          )}
        </h1>
        {isPending && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Array?.from({ length: visibleJobs }).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-red-700">Error message: {error.message}</div>
        )}
        {!isPending && !error && filteredJob?.length === 0 && (
          <div className="text-red-700">No jobs available...</div>
        )}
        {!isPending && !error && filteredJob?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {filteredJob?.slice(0, visibleJobs)?.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        )}
        {!error && visibleJobs < filteredJob?.length && (
          <div className="items-center mt-3 flex justify-center">
            {isPending ? (
              <Skeleton height={60} width={200} className="rounded-2xl" />
            ) : (
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
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
