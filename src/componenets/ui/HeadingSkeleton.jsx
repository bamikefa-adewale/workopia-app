import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeadingSkeleton = () => {
  return (
    <div className="flex gap-8 items-center">
      <Skeleton height={24} width="150px" />
      <Skeleton height={36} width="50px" className="rounded-lg" />
    </div>
  );
};

export default HeadingSkeleton;
