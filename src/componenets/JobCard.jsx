/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const JobCard = ({
  jobTitle,
  jobDescription,
  annualSalary,
  address,
  remote,
  tags,
  created_at,
  id,
}) => {
  const formattedDate = created_at
    ? dayjs(created_at).format("DD MMM YYYY, hh:mm A")
    : "Unknown";

  return (
    <div className="rounded-lg shadow-md bg-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{jobTitle}</h2>
        <p className="text-gray-700 text-lg mt-2">{jobDescription}</p>
        <ul className="my-4 bg-gray-100 p-4 rounded">
          <li className="mb-2">
            <strong>Salary:</strong> $ {annualSalary}
          </li>
          <li className="mb-2 flex ">
            <strong>Location:</strong> {address}
          </li>
          <li className="mb-2 flex ">
            <strong>Remote:</strong>
            <span
              className={`text-xs text-white text-center uppercase bg-blue-500 w-[10%] rounded-full px-2 py-1 ml-2`}
            >
              {remote}
            </span>
          </li>
          <li className="mb-2 ">
            <strong>Tags:</strong> {tags}
          </li>
          <li className="mb-2 ">
            <p> Posted At : {formattedDate}</p>
          </li>
        </ul>
        <Link
          to={`/job/${id}`}
          className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
