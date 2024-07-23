import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import EditModal from "../Modals/EditModal";
import { useGlobalContext } from "../stores/GlobalContext";
import { useContext } from "react";
import { GlobalContext } from "../stores/GlobalContext";

const Cards = ({ id, fullName, nickName, age }) => {
  // const { openModal, removeItemFromCart } = useGlobalContext();
  const { openModal, removeItemFromCart } = useContext(GlobalContext);

  return (
    <>
      <Col
        key={id}
        // xs={12}
        // sm={6}
        // md={4}
        // lg={3}
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
            <Button variant="danger" onClick={() => removeItemFromCart(id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <EditModal />
    </>
  );
};

export default Cards;
