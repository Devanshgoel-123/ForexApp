import React, { useState, useEffect } from "react";
import axios from "axios";

function LiveData() {
  const [symbol, setSymbol] = useState({});
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const currArrlive = ["EUR", "INR","GBP", "AUD", "CAD", "CHF", "CNH", "JPY","SGD","HKD","THB","MYR","AED","KWD"];

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=67f3079866da4bdea46774ae824de18e"
      )
      .then((response) => {
        setSymbol(response.data.rates);

        // Extract currency codes from the response
        setCurrencyCodes(Object.keys(response.data.rates));
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }

  // Filter the currencyCodes array to include only codes present in currArrlive
  const filteredCurrencyCodes = currencyCodes.filter((code) =>
    currArrlive.includes(code)
  );

  return (
    <div className="liveDataDiv">
        <h1 >Live Conversion Rates with </h1>
        <h1><span style={{"color":"#0180FF"}}>respect To USD</span></h1>
      <ul>
        {filteredCurrencyCodes.map((element, index) => (
          <li key={index}>
            <div className="dataDiv">
              <h4 style={{ color: "#000" }}>{element}</h4>
              <h4 style={{ color: "#000" }}>{symbol[element].slice(0,6)}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveData;
