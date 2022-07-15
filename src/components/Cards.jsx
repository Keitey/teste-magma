import React from "react";
import Card from "./Card";

import "./Cards.sass";

const Cards = () => {
  return (
    <div
      className="container-grid"
      style={{padding: "12px 5px"}}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
