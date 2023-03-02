import React, { memo, useContext, useState } from "react";
import moonIcon from "../../assets/moonIcon.svg";
import sunIcon from "../../assets/sunIcon.svg";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/route/baseUrl";
import NavBarContext from "../../contexts/NavBarContext";

const NavBar = () => {
  const { darkTheme, setDarkTheme } = useContext(NavBarContext);

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  return (
    <>
      <nav className="bg-White dark:bg-DarkBlue drop-shadow-md md:relative ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
          <Link to={`${baseUrl}`}>
            <h1 className=" font-semibold text-lg md:text-xl ">
              Where is the world ?
            </h1>
          </Link>

          {/* nav buttons */}
          <button onClick={toggleTheme} className="flex gap-1 items-center">
            <img
              src={darkTheme ? sunIcon : moonIcon}
              alt="theme"
              className="w-4 dark:w-5 dark:invert"
            />
            {darkTheme ? "Light" : "Dark"} Mode
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
