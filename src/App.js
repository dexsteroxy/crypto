import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from './components/Stats'
import Why from './components/Why'
import Calculate from './components/Calculate'
import Trade from './components/Trade'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { Route,  Routes } from "react-router-dom";
import Trending from "./main crypto/Trending";
import Coin from "./main crypto/Coin";
import CryptoDetails from "./component2/CryptoDetails";
import { CryptoProvider } from "./context/CryptoContext";
import { TrendingProvider } from "./context/TrendingContext";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  //aos init

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className=" overflow-hidden">
       <Header setNavMobile={setNavMobile} />
       <CryptoProvider>
        <TrendingProvider>
       <Routes>
        <Route path="/" element={ <Hero />}></Route>
        <Route path="/trending" element={ <Trending />}></Route>
        <Route path="/trending/id" element={ <CryptoDetails />}></Route>
        <Route path="/view" element={ <Coin />}></Route>
        <Route path=":coinId" element={ <CryptoDetails />}></Route>
      </Routes>
      </TrendingProvider>
       </CryptoProvider>
    
     
     
      {/* mobile nav */}
      <div
        className={` ${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    
    
    </div>
  );
};

export default App;
