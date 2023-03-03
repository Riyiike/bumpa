import React, { useState } from "react";
import backIcon from "../../../assets/backIcon.svg"
import { useLocation, useNavigate } from "react-router-dom";
import baseUrl from "../../../utils/route/baseUrl";
const BackBtn = (props) => {
  const { setIsLoading } = props;
  const location = useLocation();
  const [firstPath] = useState(location.pathname);
  const navigate = useNavigate();
  const isFirstPage = firstPath === location.pathname;

  function BackPage() {
    window.scrollTo(0, 0);
    setIsLoading(true);
    if (!isFirstPage) navigate(-1);
    else navigate(baseUrl);
  }

  return (
    <button
      className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
    items-center text-sm drop-shadow-md "
      onClick={BackPage}
    >
      <img className="dark:invert" src={backIcon} alt="back button" />
      Back
    </button>
  );
}
export default BackBtn