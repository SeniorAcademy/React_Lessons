import React, { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Cards from "../components/Cards";
import { useGlobalContext } from "../stores/GlobalContext";

const Home = () => {
  const {
    cartItems,
    setCartItems,
    fullName,
    setFullName,
    nickName,
    setNickName,
    age,
    setAge,
    addItemCart,
    removeItemFromCart,
    removeAllItems,
  } = useGlobalContext();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center ">
        <div className="d-flex flex-column align-items-center my-3">
          <input
            type="text"
            placeholder="FullName"
            className="my-1 px-4 py-1 rounded-2"
            value={fullName}
            onChange={(e) => {
              console.log("FullName", e.target.value);
              setFullName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="NickName"
            value={nickName}
            className="my-1 px-4 py-1 rounded-2"
            onChange={(e) => {
              console.log("setNickName", e.target.value);
              setNickName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            className="my-1 px-4 py-1 rounded-2"
            onChange={(e) => {
              console.log("Age", e.target.value);
              setAge(e.target.value);
            }}
          />
          <div>
            <Button className="m-1" onClick={addItemCart}>
              Add to Cart
            </Button>
            <Button className="m-1" variant="danger" onClick={removeAllItems}>
              Remove All
            </Button>
          </div>
        </div>

        <Row>
          {cartItems.map((cart) => (
            <Cards
              key={cart.id}
              id={cart.id}
              fullName={cart.fullName}
              nickName={cart.nickName}
              age={cart.age}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
