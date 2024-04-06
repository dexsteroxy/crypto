import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../images/submit-icon.svg";
import selectIcon from "../images/select-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
const Filters = () => {
  let { setCurrency, setSortBy, resetFunction } = useContext(CryptoContext);
  const currencyRef = useRef(null);
  // https://www.youtube.com/shorts/d0MiA-5rwFw?feature=share
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val)
  }

  return (
    <div
      className=" w-full h-12 border-2 border-darkblue-secondary 
    rounded-lg flex
     items-center justify-between"
    >
      <Search />
      <div className=" flex mr-7">
        <form
          className=" relative flex items-center mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className=" relative flex justify-center items-center mr-2 font-bold"
          >
            currency:
          </label>

          <input
            ref={currencyRef}
            type="text"
            name="currency"
            className=" w-16 rounded bg-darkblue-secondary  pl-2 required:outline-0 border leading-4 focus:border-blue border-transparent"
            placeholder="usd"
          />

          <button type="submit" className="ml-1 cursor-pointer">
            <img src={submitIcon} alt="submit" className="w-full h-auto" />
          </button>
        </form>

        <label className=" relative flex justify-center items-center">
          <span className=" font-bold mr-2">sort by:</span>
          <select
            name="sortby"
            className=" rounded bg-darkblue-secondary text-[16px] pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0"

            onClick={handleSort}
          >
            <option value=" market_cap_desc"> market cap desc</option>
            <option value=" market_cap_asc"> market cap asc</option>
            <option value=" volume_desc"> volume desc</option>
            <option value=" volume_asc"> volume asc</option>
            <option value=" id_desc"> id desc</option>
            <option value=" id_asc"> id asc</option>
            <option value=" gecko_desc"> gecko desc</option>
            <option value="gecko_asc"> gecko asc</option>
          </select>

          <img
            src={selectIcon}
            alt="submit"
            className="w-[1rem] h-auto absolute right-1 top-2 pointer-events-none"
          />
        </label>

        <button className=" w-[2rem] ml-4"
        
        onClick={resetFunction}>
          <span className="rounded bg-darkblue-secondary text-[16px] pl-2 pr-2 py-0.5 leading-4 capitalize focus:outline-0">reset</span>
        </button>
      </div>
    </div>
  );
};

export default Filters;
