import React from "react";

//import images
import image from "../assets/img/hero-img.png";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import Stats from "./Stats";
import Why from "./Why";
import Calculate from "./Calculate";
import Trade from "./Trade";
import Features from "./Features";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section>
      <div className=" container mx-auto">
        <div className=" flex flex-col lg:flex-row items-center">
          {/* hero text */}

          <div className=" flex-1">
            {/* badge text */}
            <div
              className=" bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
              data-aos="fade-down"
              data-aos-delay=" 400"
            >
              <div className=" flex items-center justify-between text-sm lg:text-base">
                <div className=" bg-white text-darkblue rounded-full font-medium py-1 px-4">
                  75% SAVE
                </div>
                <div>For the black friday weekend</div>
              </div>
            </div>
            {/* tittle */}
            <h1
              className=" text-[32px] lg:text-[64px] font-bold leading-tight mb-4"
              data-aos="fade-down"
              data-aos-delay=" 500"
            >
              {" "}
              Fastest & secure platform to invest in crypto.
            </h1>
            <p
              className=" max-w-[440px] leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay=" 600"
            >
              {" "}
              Buy and sell cryptocurrencies, trusted by wallets with over $30
              billion in transaction
            </p>
            <button
              className=" btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base"
              data-aos="fade-down"
              data-aos-delay=" 700"
            >
              Try for free
              <IoIosArrowDroprightCircle className=" text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className=" flex-1" >
            <img src={image} alt="" className=" " data-aos="fade-up" data-aos-delay=" 600" />
          </div>
        </div>
      </div>

      <Stats/>
      <Why/>
      <Calculate/>
      <Trade/>
      <Features/>
      <Newsletter/>
      <Footer/>
    </section>
  );
};

export default Hero;
