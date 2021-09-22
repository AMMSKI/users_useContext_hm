import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import UserForm from "../components/UserForm";

const User = (props) => {
  const [showForm, setShowForm] = useState(false)
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
          <Button onClick={() => setShowForm(!showForm)} variant="primary">Edit</Button>
        </Card.Body>
          {showForm && <UserForm {...user}/>}
      </Card>
      </div>
  )
}
export default User