import React from "react";
import "./App.css";

import ProductData from "./products";
import Price from "./price";
import Name from "./name";
import Image from "./image";
import Description from "./description";
const firstName = "Dammy";

function App() {
  return (
    <div className="all-app">
      <div className="app-container">
        {ProductData.map((Product, index) => (
          <div className="card" key={index}>
            <Image imageUrl={Product.imageUrl} />
            <Name name={Product.name} />
            <Price price={Product.price} />
            <Description description={Product.description} />
            <button className="btn">Go Somewhere</button>
            <h2 className="bg bg-red-500">rest</h2>

            {/* /* {firstName !== "" ? <Image imageUrl={ProductData.imageUrl} /> : null} */}
          </div>
        ))}

        {/* <p className="message">Hello, {firstName !== "" ? firstName : "there"}!</p> */}
      </div>
    </div>
    
  );
}

export default App;
