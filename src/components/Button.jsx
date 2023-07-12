import React, { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Button = () => {
  const { randomQuote } = useContext(QuoteContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === "/") {
      randomQuote();
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="flex text-primary hover:cursor-pointer absolute right-32 top-8"
      onClick={handleClick}
    >
      <p className="mr-[0.44rem] text-lg">random</p>
      <span className="material-icons md-24">autorenew</span>
    </div>
  );
};
