import React from "react";
import Logo from "../component2/Logo";
import Navigation from "../component2/Navigation";
import Table from "../component2/Table";
import { CryptoProvider } from "../context/CryptoContext";
import Filters from "../component2/Filters";
import CryptoDetails from "../component2/CryptoDetails";

const HomePage = () => {
  return (
    <CryptoProvider>
   <main className=" flex flex-col items-center justify-center">
      {/* <Navigation /> */}

      <div className=" w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        <Filters/>
        <Table />
      
      </div>
    </main>
    </CryptoProvider>
 
  );
};

export default HomePage;
