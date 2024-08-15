import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-400">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16 px-4 md:px-16">
            <div className="flex gap-3 items-center cursor-pointer">
              <img
                src="https://i.ibb.co/D9V3MTc/man-genie.png"
                alt="man-genie"
                className="h-12"
              />
              <span className="text-xl md:text-2xl text-gray-900 font-semibold">
                {location.pathname === "/random-user"
                  ? "Random User"
                  : location.pathname === "/random-jokes"
                  ? "Random Jokes"
                  : location.pathname === "/cats-listing"
                  ? "Cats Listing"
                  : "Random User"}
              </span>
            </div>
            <div className="flex space-x-2 md:space-x-4 text-blue-600 font-bold text-sm md:text-xl">
              {location.pathname !== "/random-user" &&
                location.pathname !== "/" && (
                  <a href="/random-user" className="hover:text-blue-500">
                    Random User
                  </a>
                )}
              {location.pathname !== "/random-jokes" && (
                <a href="/random-jokes" className="hover:text-blue-500">
                  Random Jokes
                </a>
              )}
              {location.pathname !== "/cats-listing" && (
                <a href="/cats-listing" className="hover:text-blue-500">
                  Cats Listing
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
