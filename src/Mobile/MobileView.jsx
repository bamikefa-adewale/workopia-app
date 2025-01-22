/* eslint-disable react/prop-types */
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { NavLinks } from "./NavLinks";

export const MobileView = ({ auth, mutate, avarter, isPending }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-white text-2xl md:hidden focus:outline-none"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Custom Drawer */}
      <div
        className={`fixed top-0 right-0 h-[28%]  bg-blue-900 shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4 max-w-xs`}
      >
        <button
          onClick={closeMenu}
          className="text-white text-2xl absolute top-4 right-4"
        >
          <FiX />
        </button>

        <nav className="p-4 flex flex-col gap-4 mt-12">
          <NavLinks
            avarter={avarter}
            auth={auth}
            mutate={mutate}
            isPending={isPending}
          />
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};
