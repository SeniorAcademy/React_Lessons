import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import EditModal from "../Modals/EditModal";

const Cards = ({
  id,
  fullName,
  nickName,
  age,
  removeItem,
  cartItems,
  setCartItems,
}) => {
  const [show, setShow] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

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

  return (
    <>
      <Col
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="d-flex flex-column align-items-center"
      >
        <Card
          style={{ width: "14rem" }}
          className="mt-3 bg-dark-subtle text-center py-3"
        >
          <Card.Body>
            <Card.Title>FullName : {fullName} </Card.Title>
            <Card.Title className="my-3">NickName : {nickName}</Card.Title>
            <Card.Title className="my-3">Age : {age}</Card.Title>
            <Button
              className="me-2"
              onClick={() => openModal({ id, fullName, nickName, age })}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => removeItem(id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <EditModal
        show={show}
        closeModal={closeModal}
        editedItem={editedItem}
        setEditedItem={setEditedItem}
        saveEdit={saveEdit}
      />
    </>
  );
};

export default Cards;
