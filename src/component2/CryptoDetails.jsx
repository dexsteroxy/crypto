import React, { useContext, useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Chart from "./Chart";




const HighLowIndicator = ({ currentPrice, high, low}) => {

  const [green, setGreen] = useState()

  useEffect(() => {
  let total = high - low;
  let greenZone = ((high - currentPrice) * 100)/total;
  setGreen(Math.ceil(greenZone))
  }, [currentPrice, high, low])
  

return (
  <>
  <span className=" bg-red-500 h-1.5 rounded-l-lg w-[50%]" style={{width: `${100 - green}%`}}>&nbsp;</span>
  <span className=" bg-green-500 h-1.5 rounded-r-lg w-[50%]" style={{width: `${green}%`}}>&nbsp;</span>
  </>
)

}
















const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getCoinData, coinData: data, currency } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  return (
    <div className=" w-full h-fit mt-12 mb-6 flex items-center justify-center">
      <div className=" w-[75%] h-fit p-6 bg-darkblue-secondary rounded-lg relative ">
        {data ? (
          <div className=" flex items-center justify-between h-full w-full p-4">
            <div className=" flex flex-col w-[45%]  pr-2 h-[32rem] ">
              <div className=" flex w-full items-center">
                <img
                  className=" w-[3rem] h-[3rem] mx-1.5"
                  src={data.image.large}
                  alt={data.id}
                />
                <h1 className=" text-2xl capitalize font-medium">
                  {data.name}
                </h1>
                <span className=" text-sm py-0.5 px-2.5 ml-2 bg-blue text-blue bg-opacity-25 rounded uppercase">
                  {data.symbol}
                </span>
              </div>

              <div className=" flex w-full mt-6">
                <div className=" flex flex-col w-full">
                  <div className=" flex justify-between">
                    <span className=" te capitalize text-gray-200">Price</span>

                    <div
                      className={`px-1 ml-2 font-medium flex items-center rounded uppercase bg-opacity-25
                    
                    ${
                      data.market_data.price_change_percentage_24h > 0
                        ? " bg-green-500 text-green-500"
                        : " bg-red-500 text-red-500"
                    }
                    `}
                    >
                      <span>
                        {Number(
                          data.market_data.price_change_percentage_24h
                        ).toFixed(2)}
                        %
                      </span>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`

                        w-[1rem] ml-0.5
                        ${
                          data.market_data.price_change_percentage_24h > 0
                            ? " fill-green-500 rotate-180"
                            : " fill-red-500 "
                        }
                        
                        `}
                      >
                        <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                      </svg>
                    </div>
                  </div>

                  <h2 className=" text-xl font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.current_price[currency])}
                  </h2>
                </div>
              </div>

              <div className=" flex w-full mt-4 justify-between">
                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-200">Market cap</span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,

                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.market_cap[currency])}
                  </h2>
                </div>

                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-200">
                    Fully diluted valuation
                  </span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      notation: "compact",
                      //   maximumSignificantDigits: 5,
                    }).format(
                      data.market_data.fully_diluted_valuation[currency]
                    )}
                  </h2>
                </div>
              </div>

              <div className=" flex flex-col w-full mt-4 justify-between">
                <span className=" capitalize text-gray-200">Total volume</span>
                <h2 className="text-[16px] font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                    //   maximumSignificantDigits: 5,
                  }).format(data.market_data.total_volume[currency])}
                </h2>
              </div>

              <div className=" flex w-full mt-4 justify-between"><HighLowIndicator
              currentPrice={data.market_data.current_price[currency]}
              high={data.market_data.high_24h[currency]}
              low={data.market_data.low_24h[currency]}
              
              /></div>

              <div className=" flex w-full mt-4 justify-between">
                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-200">Low 24H</span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,

                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.low_24h[currency])}
                  </h2>
                </div>

                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-300">High 24H</span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.high_24h[currency])}
                  </h2>
                </div>
              </div>

              <div className=" flex w-full mt-4 justify-between">
                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-200">Max supply</span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,

                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.max_supply)}
                  </h2>
                </div>

                <div className=" flex flex-col">
                  <span className=" capitalize text-gray-300">
                    Circulating supply
                  </span>
                  <h2 className="text-[16px] font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                      //   maximumSignificantDigits: 5,
                    }).format(data.market_data.circulating_supply)}
                  </h2>
                </div>
              </div>

              <div className=" flex w-full mt-4 justify-between">
                <div className=" flex flex-col">
                  <a
                    target={"_blank"}
                    rel=" noreferrer"
                    className=" text-sm bg-gray-500 text-gray-300 px-1.5 py-0.5 my-1 rounded"
                    href={data?.links?.homepage[0]}
                  >
                    {data?.links?.homepage[0].substring(0, 30)}
                  </a>
                  <a
                    target={"_blank"}
                    rel=" noreferrer"
                    className=" text-sm bg-gray-500 text-gray-300 px-1.5 py-0.5 my-1 rounded"
                    href={data?.links?.blockchain_site[0]}
                  >
                    {data?.links?.blockchain_site[0].substring(0, 30)}
                  </a>

                  {data?.links?.official_forum_url[0] && (
                    <a
                      target={"_blank"}
                      rel=" noreferrer"
                      className=" text-sm bg-gray-500 text-gray-300 px-1.5 py-0.5 my-1 rounded"
                      href={data?.links?.official_forum_url[0]}
                    >
                      {data?.links?.official_forum_url[0].substring(0, 30)}
                    </a>
                  )}
                </div>

                <div className=" flex flex-col content-start">
                  <span className=" capitalize text-gray-300">satiment</span>
                  <div className=" flex justify-between">
                    {/* <span className=" te capitalize text-gray-400">Price</span> */}

                    <div
                      className={`px-1 ml-2 font-medium flex bg-green-500 text-green-500 my-1 items-center rounded uppercase bg-opacity-25
                   
                    `}
                    >
                      <span>
                        {Number(data.sentiment_votes_up_percentage).toFixed(2)}%
                      </span>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`

                        w-[1rem] ml-0.5
                      fill-green-500 rotate-180
                        
                        `}
                      >
                        <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                      </svg>
                    </div>
                  </div>

                  <div className=" flex justify-between">
                    {/* <span className=" te capitalize text-gray-400">Price</span> */}

                    <div
                      className={`px-0.5 ml-2 font-medium bg-red-500 text-red-500 my-1 flex items-center rounded uppercase bg-opacity-25
                    
                  
                    `}
                    >
                      <span>
                        {Number(data.sentiment_votes_down_percentage).toFixed(
                          2
                        )}
                        %
                      </span>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`

                        w-[1rem] ml-0.5
                        fill-red-500
                        
                        `}
                      >
                        <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col w-[50%] h-[32rem] pl-3 ">
              <Chart id={data.id}/>

              <div className=" flex flex-col mt-4">
<h3 className=" py-1"><span className=" text-gray-200 capitalize mr-1">Market cap rank</span>  {data.market_cap_rank}</h3>

<h3 className=" py-1"><span className=" text-gray-200 capitalize mr-1">CoinGecko rank </span>  {data.coingecko_rank}</h3>
<h3 className="py-1"><span className=" text-gray-200 capitalize mr-1">Coingecko score</span>  {data.coingecko_score}</h3>
              </div>
            </div>

<div className=" absolute bottom-8 right-8 flex flex-col items-center">
  <a className=" text-sm px-0.5 text-gray-400 hover:text-blue" href="https://github.com/" target="blank">Github</a>
  <a className=" text-sm px-0.5 text-gray-400 hover:text-blue" href="https://www.linkedin.com/in/sixtus-amadi/">Linkedin</a>
  <a className=" text-sm px-0.5 text-gray-400 cursor-default" href="#"><span className="">Email: dexsteroxy.1234@gmail.com</span></a>
  <a className=" text-sm px-0.5 text-gray-400 cursor-default" href="#">Phone-number: +123 (901 894 4777)</a>
</div>

          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CryptoDetails;
