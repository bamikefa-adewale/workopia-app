import Showcase from "../componenets/Showcase";
import TopBanner from "../componenets/TopBanner";
import BottomBanner from "../componenets/BottomBanner";
import JobListings from "../componenets/JobListings";
import { useState } from "react";

const DashBoard = () => {
  const [searchQuery, setSearchQuery] = useState({
    keywords: "",
    location: "",
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Showcase onSearch={handleSearch} />
      <TopBanner />
      {/* Display of all Jobs */}
      <JobListings searchQuery={searchQuery} />
      <BottomBanner />
    </div>
  );
};

export default DashBoard;
