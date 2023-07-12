import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { QuoteProvider } from "./context/QuoteProvider";
import { RandomQuote } from "./layouts/RandomQuote";
import { AuthorQuotes } from "./layouts/AuthorQuotes";

function App() {
  return (
    <>
      <QuoteProvider>
        <Button />
    

      <Routes>
        <Route path="/:author" element={<AuthorQuotes />}/>
        <Route path='/*' element={<RandomQuote/>} />

      </Routes>
  
        

        <Footer />
      </QuoteProvider>
    </>
  );
}

export default App;
