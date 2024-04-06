import React from "react";

import image1 from "../assets/img/feature-1-img.png";

const FeaturesSection1 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className=" flex flex-col lg:flex-row ">
        {/* text */}
        <div className=" max-w-[454px] mb-6 lg:mt-10"  data-aos="fade-down"
            data-aos-delay=" 450">
          <h3 className="h3 mb-6">Invest Smart</h3>
          <p className=" text-gray mb-8">
            Get full statistic information about the behavour of buyers and
            sellers will help you make the decision
          </p>
          <button className=" btn px-8">Learn more</button>
        </div>

        {/* img */}

        <div className=" flex-1 flex justify-end"  data-aos="fade-left"
            data-aos-delay=" 450">
          <img src={image1} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
