import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {

let navigate = useNavigate();

const getCoinDetails =(id) => {
    navigate(id);
}


  return (
    <div className=" w-[40%] bg-darkblue-secondary mb-12 last:mb-0 rounded-lg 
     p-4 relative cursor-pointer hover:bg-gray-400 hover:bg-opacity-40"  data-aos="fade-up"
     data-aos-delay=" 400"
     
    //  onClick={() => getCoinDetails(data.id)}
     
     >
      {data ?
      
  <>
    <h3 className=" text-[16px] flex items-center my-0.5">
        <span className=" text-gray-200 capitalize">Name:&nbsp; </span>
        <span className=" text-blue">{data.name}</span>
        <img src={data.small} alt={data.name} className=" w-[1.5rem] h-[1.5rem]  mx-1.5 rounded-full" />
    </h3>


<h3 className=" text-[16px] flex items-center my-0.5">
<span className=" text-gray-200 capitalize">Market cap rank:&nbsp; </span>
<span className=" text-blue">{data.market_cap_rank}</span>

</h3>

<h3 className=" text-[16px] flex items-center my-0.5">
<span className=" text-gray-200 capitalize">Price (in btc):&nbsp; </span>
<span className=" text-blue">
    
    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "btc",
                      maximumSignificantDigits: 5,
                    }).format(data.price_btc)}
    
    
  </span>

</h3>


<h3 className=" text-[16px] flex items-center my-0.5">
<span className=" text-gray-200 capitalize">Score:&nbsp; </span>
<span className=" text-blue">{data.score}</span>

</h3>


<img src={data.large} alt={data.name} className=" w-[35%] h-auto absolute top-2/4 -right-12 -translate-y-2/4  rounded-full" />
  
  </>
    
    :null
    }


    </div>
  );
};

export default TrendingCoin;
