import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Error = () => {
  return (
    // <Hero>

       <Banner title="404" subtitle="page not found">
           <Navbar/>
        {/* <Link to="/" className="btn-primary">
          return home
        </Link> */}
       </Banner>
    // </Hero>
  );
};

export default Error;
