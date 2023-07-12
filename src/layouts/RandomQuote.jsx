import React, { useContext, useEffect, useState } from "react";
import { AuthorButton } from "../components/AuthorButton";
import { Quote } from "../components/Quote";
import { QuoteContext } from "../context/QuoteContext";
import { Loader } from "../components/Loader";

export const RandomQuote = () => {
  const { quote, randomQuote, loading } = useContext(QuoteContext);

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="mt-[17rem]">
            <Quote text={quote.text} />
          </div>

          <div className="mt-[6.81rem] flex justify-center">
            <AuthorButton author={quote.author} genre={quote.genre} />
          </div>
        </div>
      )}
    </>
  );
};
