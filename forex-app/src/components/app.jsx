import React, { useState } from "react";
import CurrencyData from "./currency";
import Header from "./header";
import Navbar from "./navbar";
import Chart from "./charts";
import Footer from "./footer";
function App(){
    const [currencyL,setCurrencyL]=useState("");
    const [currencyR,setCurrencyR]=useState("");

   
    function handleCurrencyUpdate(newCurrencyL,newCurrencyR){
            setCurrencyL(newCurrencyL);
            setCurrencyR(newCurrencyR);
            console.log("hello");
    };

    return <div >
        <Navbar />
        <Header />
        <CurrencyData onDataUpdate={handleCurrencyUpdate}/>
        <Chart currencyL={currencyL} currencyR={currencyR}/>
        <Footer />
    </div>;
}

export default App;
