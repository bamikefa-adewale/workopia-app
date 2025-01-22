import { FaCircleArrowLeft } from "react-icons/fa6";
import BottomBanner from "../componenets/BottomBanner";
import { useDeleteForm } from "../hooks/useDeleteForm";
import { useGetJob } from "../hooks/useGetJob";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Link } from "react-router-dom";
import { ApplyJobModal } from "../componenets/ui/ModalComponent/ApplyJobModal";
import JobCardSkeleton from "../componenets/ui/JobCardSkeleton";
import HeadingSkeleton from "../componenets/ui/HeadingSkeleton";

const JobDetails = () => {
  const { user } = useCurrentUser();
  const { data: job, isPending, error } = useGetJob();
  const { mutate: deleteUser, deleteJobLoader } = useDeleteForm();

  if (!job && !isPending && !error)
    return (
      <div className="text-red-400 justify-between flex">No job found.</div>
    );

  const isJobOwner = Boolean(user?.id === job?.user_id);
  console.log("Is Job Owner:", isJobOwner);

  return (
    <div className="bg-gray-100">
      <section className="container mx-auto p-4 mt-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          {isPending ? (
            <HeadingSkeleton />
          ) : (
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="p-4 text-blue-700 flex items-center gap-2"
              >
                <FaCircleArrowLeft /> Back To Home
              </Link>
              {isJobOwner && (
                <div className="flex space-x-4 ml-4">
                  <Link
                    to={`/post-edit/${job?.id}`}
                    state={{ job }} // Pass the full job object
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(job?.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                    disabled={deleteJobLoader}
                  >
                    {deleteJobLoader ? "Deleting..." : "Delete"}
                  </button>
                </div>
              )}
            </div>
          )}

          {isPending ? (
            <JobCardSkeleton />
          ) : (
            <section className="">
              <div>
                <h1 className="text-3xl font-bold mb-4">{job?.jobTitle}</h1>
                <p className="text-lg text-gray-700 mb-6">
                  {job?.jobDescription}
                </p>
              </div>
              <ul className="bg-gray-100 p-4 rounded">
                <li className="mb-4">
                  <strong>Salary :</strong> $ {job?.annualSalary}
                </li>
                <li className="mb-2 flex ">
                  <strong>Location:</strong> {job?.address}
                  <span
                    className={`text-xs ${job?.tagType} text-white text-center uppercase bg-blue-500 p-3 w-[5%] rounded-full px-2   py-1 ml-2`}
                  >
                    {job?.remote}
                  </span>
                </li>
                <li className="mb-4">
                  <strong>Tags:</strong> {job?.tags}
                </li>
              </ul>
            </section>
          )}
        </div>
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        {isPending ? (
          <JobCardSkeleton />
        ) : (
          <div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h3 className="text-lg  mb-2 text-blue-500">
                <strong>Job Requirements</strong> : {job?.requirements}
              </h3>
              <h3 className="text-lg  mt-4 mb-2 text-blue-500">
                <strong>Benefits</strong> : {job?.benefit}
              </h3>
              <h3 className="text-lg  mt-4 mb-2 text-blue-500">
                <strong className="text-blue-500">Phone Number</strong> :{" "}
                {job?.number}
              </h3>
              <p className="text-lg   mt-4 mb-2">
                <strong className="text-blue-500"> Description</strong> :{" "}
                {job?.companyDescription}
              </p>
              <p>Healthcare, 401(k) matching, flexible work hours</p>
            </div>
            <p className="my-5">
              Put Job Application as the subject of your email and attach your
              resume.
            </p>
            {!isJobOwner && (
              <button
                disabled={isPending}
                className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                {isPending ? "Applying..." : " Apply Now"}
              </button>
            )}
            <ApplyJobModal isPending={isPending} />
          </div>
        )}
      </section>

      <BottomBanner />
    </div>
  );
};
export default JobDetails;
