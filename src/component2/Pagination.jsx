import React, { useContext, useRef } from "react";
import paginationArrow from "../images/pagination-arrow.svg";
import { useState } from "react";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from '../images/submit-icon.svg'




const PerPage = () =>{

const {setPerPage} = useContext(CryptoContext)
    const inputRef = useRef(null);



    const handleSubmit = (e) =>{
        e.preventDefault();
        let val = inputRef.current.value;
        if (val !== 0) {
            setPerPage(val)
            inputRef.current.value = val;
        }
    }
    return(
        <form
        className=" relative flex items-center mr-12"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="perPage"
          className=" relative flex justify-center items-center mr-2 font-bold"
        >
          per Page:
        </label>

        <input
          ref={inputRef}
          type="number"
          min={1}
          max={250}
          name="perPage"
          className=" w-16 rounded bg-darkblue-secondary  pl-2 required:outline-0 border leading-4 focus:border-blue border-transparent"
          placeholder="10"
        />

        <button type="submit" className="ml-1 cursor-pointer">
          <img src={submitIcon} alt="submit" className="w-full h-auto" />
        </button>
      </form>

    )
}






























const Pagination = () => {
let {page, setPage, totalPages, perPage, cryptoData} = useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages/perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(TotalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };


if (cryptoData && cryptoData.length >= perPage) {
    return (
        <div className=" flex items-center">
            <PerPage/>
          <ul className=" flex items-center justify-end text-sm">
            <li className=" flex items-center">
              <button className=" outline-0 hover:text-blue w-8" onClick={prev}>
                <img
                  className=" w-full h-auto rotate-180"
                  src={paginationArrow}
                  alt="paginationLeft"
                />
              </button>
            </li>
           
    
    {
        (page + 1 === TotalNumber || page === TotalNumber) ?
        <li>
        <button
          onClick={multiStepPrev}
          className=" outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center text-lg"
        >
          ...
        </button>
      </li>
      : null
    }
    
         {
            (page - 1 !== 0) ? 
            <li>
            <button
              onClick={prev}
              className=" outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-darkblue-secondary mx-1.5"
            >
              {page - 1}
            </button>
          </li>
          : null
         }
            <li>
              <button
                disabled
                className=" outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-blue text-white mx-1.5"
              >
                {page}
              </button>
            </li>
          
    
          {
             (page + 1 !== TotalNumber && page !== TotalNumber ) ? 
             <li>
             <button
               onClick={next}
               className=" outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-darkblue-secondary mx-1.5"
             >
               {page + 1}
             </button>
           </li>
           : null
          }
    
            {page + 1 !== TotalNumber && page !== TotalNumber ? (
              <li>
                <button
                  onClick={multiStepNext}
                  className=" outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  ...
                </button>
              </li>
            ) : null}
    
            {page !== TotalNumber ? (
              <li>
                <button
                  onClick={() => setPage(TotalNumber)}
                  className=" outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-darkblue-secondary mx-1.5"
                >
                  {TotalNumber}
                </button>
              </li>
            ) : null}
            <li>
              <button className=" outline-0 hover:text-blue w-8" onClick={next}>
                <img
                  className=" w-full h-auto"
                  src={paginationArrow}
                  alt="paginationright"
                />
              </button>
            </li>
          </ul>
        </div>
      );
} else {
    return null;
}


};

export default Pagination;
