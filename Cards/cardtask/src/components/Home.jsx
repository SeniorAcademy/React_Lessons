// rafce
import Cards from "./Cards";
import React from "react";
import { ProductsData } from "../datas/data";

const Home = () => {
  return (
    <>
      <div className="p-5 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ProductsData.map((product, index) => (
          <Cards
            key={index}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
