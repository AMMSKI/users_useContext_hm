import React from "react";
import { Button, Card } from "react-bootstrap";

const User = (props) => {
  const user = props
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.avitar} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Card.Text>
            DoB: {user.Dob}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
  )
}
export default User