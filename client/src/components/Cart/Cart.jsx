import React, { useState } from "react";
import { Cards } from "../Cards/Cards";
import { Hcard } from "../HeaderCard/Hcard";

export const Cart = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Hcard count={count}></Hcard>
      <Cards count={count} setCount={setCount}></Cards>
    </div>
  );
};
