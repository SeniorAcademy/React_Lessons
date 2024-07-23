import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { GetProducts } from "../services/service";
import { ROUTER } from "../constant/router";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await GetProducts();
    setProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-10">
        {products.length === 0 && (
          <h2 className="text-green-300 text-4xl font bold m-12">Not Found</h2>
        )}
        <div className="p-5 grid gap-x-20 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product, index) => (
            <div className=" bg-gray-800 text-gray-200 rounded-xl" key={index}>
              <img
                className="w-full mb-2 h-52 object-cover rounded-t-xl"
                src={product.image}
                alt={product.title}
              />
              <div className=" px-2">
                <h2 className="text-green-300">
                  Title: {product.title.slice(0, 25)}
                </h2>
                <p className="my-3 text-gray-400">
                  {" "}
                  {product.description.slice(0, 45)}...
                </p>
                <p className=" text-indigo-300">Category :{product.category}</p>
              </div>

              <div className="flex items-center justify-between  p-4">
                <div>
                  <p className="mb-3 text-cyan-300">${product.price}</p>
                  <p className="text-indigo-300">
                    Rating : {product.rating.rate}
                  </p>
                </div>
                <button className="bg-blue-500 text-white p-3  rounded-lg hover:bg-blue-700 transition-all duration-500"></button>
                <button
                  className="bg-indigo-500 text-white p-3  rounded-lg hover:bg-blue-700 transition-all duration-500"
                  onClick={() =>
                    navigate(`${ROUTER.DetailsPage}/${product.id}`)
                  }
                >
                  Go Details Page
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
