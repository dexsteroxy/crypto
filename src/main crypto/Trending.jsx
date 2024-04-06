import React, { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "../component2/TrendingCoin";
import { data } from "autoprefixer";
import { Outlet } from "react-router-dom";
import CryptoDetails from "../component2/CryptoDetails";

const Trending = () => {

  const {trendData} = useContext(TrendingContext)
  return (
    <section className=" w-[80%] h-full mx-auto flex flex-col mt- mb-24 relative">
       <div className="w-full flex flex-wrap py-8 justify-evenly min-h-[60vh] mt-9  rounded">
        {
          trendData && trendData.map(coin => 
            <TrendingCoin key={data.coin_id} data={coin.item}/>
            )
        }
       </div>
       {/* < CryptoDetails/>  */}
    </section>
  );
};

export default Trending;
