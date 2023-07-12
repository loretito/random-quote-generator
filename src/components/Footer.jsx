import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center mt-16">
      <p className="font-mono text-sm text-[#BDBDBD] fixed bottom-0 bg-white  pb-6 pt-2 w-screen text-center">
        created by{" "}
        <a
          className="underline underline-offset-2 font-bold"
          href="https://github.com/loretito"
          target="_blank"
        >
          loretito
        </a>{" "}
        - devChallenges.io
      </p>
    </div>
  );
};
