import React from "react";
import SingleDesser from "./SingleDesser";

const Dessert = () => {
  return (
    <div className="dessert">
      <h1 className="mainTitle">Desserts</h1>

      <div className="containerForDesserts">
        <SingleDesser />
      </div>
    </div>
  );
};

export default Dessert;
