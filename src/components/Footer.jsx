import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center mt-16 font-mono text-sm text-[#BDBDBD] fixed bottom-0 bg-white pb-2 pt-2 w-screen">
      <div
        className="flex hover:cursor-pointer"
        onClick={() => window.open("https://github.com/loretito", "_black")}
      >
        <p>
          created by <span className="font-bold"> loretito</span>
        </p>
        <img src="/github.svg" alt="" className="w-5" />
      </div>
    </div>
  );
};
