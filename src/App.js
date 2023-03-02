// import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/organisms/NavBar";
import NavBarContext from "./contexts/NavBarContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  // nav bar data
  const navBarObject = {
    darkTheme: darkTheme,
    setDarkTheme: setDarkTheme,
  };

  // dark theme swicther
  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <main
      className="min-h-screen text-sm bg-VeryLightGray dark:bg-VeryDarkBlue text-VeryDarkBlue 
    dark:text-White sm:text-base"
    >
      <NavBarContext.Provider value={navBarObject}>
        <NavBar />
      </NavBarContext.Provider>
    </main>
  );
}

export default App;
