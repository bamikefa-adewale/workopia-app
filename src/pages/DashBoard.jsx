import Showcase from "../componenets/Showcase";
import TopBanner from "../componenets/TopBanner";
import BottomBanner from "../componenets/BottomBanner";
import JobListings from "../componenets/JobListings";
import { useCurrentUser } from "../hooks/useCurrentUser";

const DashBoard = () => {
  useCurrentUser();
  return (
    <div>
      {" "}
      <Showcase />
      <TopBanner />
      <JobListings />
      <BottomBanner />
    </div>
  );
};

export default DashBoard;
