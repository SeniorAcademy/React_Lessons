import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../constant/router";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="px-3 py-8 bg-gray-800 text-gray-300 flex justify-center items-center">
        <Link
          className={`font-medium mr-3 text-[28px] ${
            pathname === ROUTER.Home ? "text-[#D63626]" : "text-[#828282]"
          } cursor-pointer`}
          to={ROUTER.Home}
        >
          Home
        </Link>
        <Link
          className={`font-medium mr-3 text-[28px] ${
            pathname === ROUTER.Basket ? "text-[#4aee50]" : "text-[#828282]"
          } cursor-pointer`}
          to={ROUTER.Basket}
        >
          Basket
        </Link>
      </div>
    </>
  );
};

export default Navbar;
