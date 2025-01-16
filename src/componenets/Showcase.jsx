/* eslint-disable react/prop-types */
import { VscSearch } from "react-icons/vsc";
import showcase from "../assets/showcase.jpg";
import CustomInput from "./ui/CustomInput";
import { useState } from "react";

const Showcase = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState({
    keywords: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(value);

    setSearchQuery((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search updated:", searchQuery);

    onSearch(searchQuery);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-72 flex items-center"
      style={{
        backgroundImage: `url(${showcase})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-6 sm:px-4">
        <h2 className="text-4xl text-white font-bold mb-6">
          Find Your Dream Job
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-center gap-2"
        >
          <label htmlFor="keywords" className="sr-only">
            keywords
          </label>
          <CustomInput
            id="keywords"
            type="text"
            value={searchQuery.keywords}
            onChange={handleInputChange}
            placeholder="keywords"
            className="w-full md:w-auto px-4 py-2 rounded focus:outline-none"
          />
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <CustomInput
            id="location"
            type="text"
            value={searchQuery.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full md:w-auto px-4 py-2 rounded focus:outline-none"
          />
          <button className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">
            <VscSearch /> Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Showcase;
