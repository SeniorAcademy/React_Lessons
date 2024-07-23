import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutDetail from "./AboutDetail";
import AboutUs from "./AboutUs";
import { useLocation } from "react-router-dom";

const About = () => {
    // const location = useLocation();
    // const pathname = location.pathname
    // console.log("location", pathname);

  const { pathname } = useLocation();
  console.log("location", pathname);

  return (
    <>
      <h1>AboutPage</h1>
      <div className="my-7">
        <Link className="text-gray-800 mx-2 p-4 bg-slate-300" to="aboutus">
          Us
        </Link>
        <Link className="text-gray-800 mx-2 p-4 bg-slate-300" to="aboutdetail">
          Detail
        </Link>
      </div>

      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="aboutdetail" element={<AboutDetail />} />
      </Routes>
    </>
  );
};

export default About;
