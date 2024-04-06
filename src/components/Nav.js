import React from 'react';
import { navData } from "../data";
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
  <nav className=" flex items-center">
  <ul className=" flex gap-x-8">
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
  )
};

export default Nav;
