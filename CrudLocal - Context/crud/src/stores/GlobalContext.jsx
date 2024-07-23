import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(0);

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
      // setCartItems([...cartItems]);
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

  const openModal = (item) => {
    setShow(true);
    setEditedItem(item);
  };

  const closeModal = () => {
    setShow(false);
    setEditedItem(null);
  };

  const saveEdit = () => {
    const updatedItem = cartItems.map((cart) =>
      cart.id === editedItem.id ? { ...editedItem } : cart
    );
    setCartItems(updatedItem);
    localStorage.setItem("cartItems", JSON.stringify(updatedItem));
    closeModal();
  };

  const contextValue = {
    show,
    setShow,
    editedItem,
    setEditedItem,
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
    openModal,
    closeModal,
    saveEdit,
  };
  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};
const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext, GlobalContextProvider,  GlobalContext };
