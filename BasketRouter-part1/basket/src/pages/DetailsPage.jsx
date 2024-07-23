import React, { useState, useEffect } from "react";
import { GetSingleProduct } from "../services/service";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState("");

  const fetchData = async () => {
    const response = await GetSingleProduct(id);
    setProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="flex justify-center items-center">
        {products && (
          <div className="bg-gray-700 text-gray-400 mt-14 w-6/12 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-t-lg"
              src={products.image}
              alt={products.title}
            />
            <div className="px-4 py-8">
              <h1>{products.title}</h1>
              <p>{products.description}</p>
              <p>{products.category}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
