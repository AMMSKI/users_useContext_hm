import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import UserProvider, { UserContext } from "../providers/UserProvider";

const Users = () => {
  const value = useContext(UserContext)

  console.log(value)

  const renderUsers =() =>{
    return value.users.map((u)=> {
      return(
      <div key={u.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={u.avitar} />
        <Card.Body>
          <Card.Title>{u.name}</Card.Title>
          <Card.Text>
            {u.email}
          </Card.Text>
          <Card.Text>
            DoB: {u.Dob}
          </Card.Text>
          <Button 
            onClick={()=> value.dispatch({type: 'DELETE_USER', id: u.id})} 
            variant="outline-danger">
            <TrashFill/>
          </Button>
        </Card.Body>
      </Card>
      </div>
      )
    })
  }
  return (
    <div>
      <h1>Users</h1>
      {renderUsers()}
    </div>
  )
}

export default Users