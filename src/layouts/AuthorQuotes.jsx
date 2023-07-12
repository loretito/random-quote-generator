import React, { useContext, useEffect, useState } from "react";
import { QuoteContext } from "../context/QuoteContext";
import { Quote } from "../components/Quote";
import { Loader } from "../components/Loader";
export const AuthorQuotes = () => {
  const [text, setText] = useState([]);
  const { quote } = useContext(QuoteContext);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
  }, [text])
  

  const getQuotes = async () => {
    setloading(true)
    await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes/?author=${quote.author}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setloading(false)
        const response = data.data;
        setText(response)
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <>
    {
        loading ?
            <Loader/>
        :
    <div>

    <div className="flex justify-center">
        
      <h1 className="text-bgcolor font-bold text-4xl mt-[6.3rem] w-[38rem]">
         {quote.author}
      </h1>
        </div>   

      {text.map(txt => (
        <Quote key={txt._id} text={txt.quoteText} mt ={'mt-[8.75rem]'}/>
      ))}
    </div>
    }
    </>
  );
};
