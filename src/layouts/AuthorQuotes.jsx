import React, {useEffect, useState } from "react";
import { Quote } from "../components/Quote";
import { Loader } from "../components/Loader";
import { useLocation } from "react-router-dom";
export const AuthorQuotes = () => {
  const [text, setText] = useState([]);
  const [loading, setloading] = useState(true)

  //obteniendo el nombre del path
  const {pathname} = useLocation()
  const path = pathname.split(/%20|\//)
  const name = path.slice(1).join(" ")

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
  }, [text])
  

  const getQuotes = async () => {
    setloading(true)
    await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes/?author=${name}`
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
        
      <h1 className="text-bgcolor font-bold text-4xl mt-[6.3rem] lg:w-[38rem] md:w-[29rem]">
         {name}
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
