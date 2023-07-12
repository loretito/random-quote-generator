import { useState } from "react";
import { QuoteContext } from "./QuoteContext";

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
    genre: "",
  });

  const [loading, setLoading] = useState(true);

  const randomQuote = async () => {
    setLoading(true);
    await fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setLoading(false);
        const q = data.data[0];

        setQuote({
          author: q.quoteAuthor,
          text: q.quoteText,
          genre: q.quoteGenre,
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <QuoteContext.Provider value={{ quote, setQuote, randomQuote, loading }}>
      {children}
    </QuoteContext.Provider>
  );
};
