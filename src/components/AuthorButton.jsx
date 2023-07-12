import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthorButton = ({ author, genre }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${author}`);
  };

  return (
    <div
      className="md:w-[42rem] w-[25rem] hover:bg-bgcolor h-36 flex items-center hover:text-[#F2F2F2] justify-between px-[1.81rem] text-primary hover:cursor-pointer group rounded-lg transition duration-300 ease-out hover:ease-in-out"
      onClick={handleClick}
    >
      <div className="">
        <h3 className=" font-bold text-2xl ">{author}</h3>
        <p className="text-sm text-secondary">{genre}</p>
      </div>
      <img
        src="/arrow_right_alt.svg"
        className="w-[2rem] group-hover:block hidden"
      />
    </div>
  );
};
