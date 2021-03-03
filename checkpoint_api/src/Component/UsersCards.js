import React from "react";
import { Card } from "react-bootstrap";
const UsersCards = ({ user }) => {
  return (
    <div>
      <>
        <Card className="users" border="primary" style={{ width: "18rem" }}>
          <Card.Header>{user.name}</Card.Header>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default UsersCards;
