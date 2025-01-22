import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const BottomBanner = () => (
  <section className="container mx-auto my-4">
    <div className="bg-blue-800 text-white rounded px-1 py-4 flex items-center gap-20 justify-between">
      <div>
        <h2 className="text-xl font-semibold">Looking to hire?</h2>
        <p className="text-gray-200 md:text-lg font-normal sm:text-xs mt-2">
          Post your job listing now and find the perfect candidate.
        </p>
      </div>
      <Link
        to={"/job-post"}
        className="bg-yellow-500 flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
      >
        <FiEdit /> Post a Job
      </Link>
    </div>
  </section>
);

export default BottomBanner;
