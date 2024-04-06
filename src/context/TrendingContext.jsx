//create context object

import { createContext, useLayoutEffect, useState } from "react";
import { json } from "react-router-dom";

export const TrendingContext = createContext({});

//create the provider

export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();
 

 

  const getTrendData = async () => {
 

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);

        setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };



  const resetTrendingResult = () => {
   
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);
  return (
    <TrendingContext.Provider
      value={{
     trendData,
     resetTrendingResult
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};