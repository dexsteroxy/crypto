import React from "react";

import { navData } from "../data";

import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavMobile = ({setNavMobile}) => {
  return (
    <nav className=" bg-violet lg:hidden h-full top-0 bottom-0 w-80 flex items-center justify-center">
      {/* close btn */}
      <div onClick={()=> setNavMobile(false)} className=" absolute top-2 left-2 cursor-pointer">
        <CgClose className=" text-3xl"/>
      </div>

      {/* menu list */}


  <ul className=" flex flex-col gap-y-8 text-2xl font-semibold">
   <li className='border-b-2 border-transparent hover:border-white transition-all duration-300'>
    <Link to="/">Home</Link>
   </li>

   <li className='border-b-2 border-transparent hover:border-white transition-all duration-300'>
    <Link to="/trending">Trending Coin</Link>
   </li>

   <li className='border-b-2 border-transparent hover:border-white transition-all duration-300'>
    <Link to="/view">View Coin</Link>
   </li>
  </ul>

    </nav>
  );
};

export default NavMobile;
