import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-md bg-white p-4">
      <Skeleton height={20} width="60%" className="mb-4" />
      <Skeleton height={16} count={4} className="mb-2" />
      <Skeleton height={16} width="80%" className="mb-4" />
      <Skeleton height={16} width="50%" className="mb-2" />
      <Skeleton height={40} width="100%" />
    </div>
  );
};

export default JobCardSkeleton;
