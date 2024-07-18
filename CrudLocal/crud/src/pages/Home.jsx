import React, { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Cards from "../components/Cards";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  const addItemCart = () => {
    if (fullName && nickName && age) {
      const newUser = {
        id: new Date().getTime(),
        fullName,
        nickName,
        age: parseInt(age),
      };
      const addedItem = [...cartItems, newUser];
      setCartItems(addedItem);
      localStorage.setItem("cartItems", JSON.stringify(addedItem));
      // cartItems.push(newUser);
      //setCartItems([...cartItems]);
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setFullName("");
      setNickName("");
      setAge(0);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const removeItemFromCart = (cartId) => {
    const deletedItem = cartItems.filter((cart) => cart.id !== cartId);
    setCartItems(deletedItem);
    localStorage.setItem("cartItems", JSON.stringify(deletedItem));
  };


  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

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
              removeItem={removeItemFromCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
