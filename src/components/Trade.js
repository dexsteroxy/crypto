import React, { useState } from "react";

import { currency } from "../data";

import { IoIosArrowForward } from "react-icons/io";
const Trade = () => {

  const [itemName, setItemName] = useState('Bitcoin');
  return (
    <section className=" section lg:pt-[200px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[200px]">
      <div className=" container mx-auto">
        <h2 className="section-title text-center mb-16"   data-aos="fade-up"
            data-aos-delay=" 400">
          Trade Securely and Market the high growth cryptocurrencies
        </h2>

        <div className=" flex flex-col lg:flex-row gap-[45px] "   data-aos="fade-up"
            data-aos-delay=" 450">
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;
            return (
              <div onClick={() => setItemName(name)}
                className={` ${name === itemName ? 'bg-violet text-white' : ' bg-white'} w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition-all duration-300` }
                key={index}
              >
                <div className=" flex flex-col justify-center items-center">
                  <img className=" mb-12" src={image} alt="" />

                  {/* item name */}
                  <div className=" mb-4 flex items-center gap-x-2">
                    <div className=" text-[32px] font-bold ">{name}</div>
                    <div className=" text-lg text-gray-400 font-medium">
                      {abbr}
                    </div>
                  </div>
                  {/* item d */}
                  <p className=" mb-6 text-center">{description}</p>

                  {/* btn */}

                  <button className={ `${name === itemName ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3' : "text-blue w-16"}border-2 border-gray-300 rounded-xl h-16 flex justify-center items-center`}>
                    <IoIosArrowForward className=" text-xl"/>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
