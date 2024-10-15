
import Header from "./Header";
import Footer from "./Footer";
import {useRouteError } from "react-router-dom"; 

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
      <>
        <Header />
        <div>
            <h1>Wrong page</h1>
            <h2>Oopss!! Something went wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
        <Footer />
      </>
  )
}

export default Error;