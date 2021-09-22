import React, { useState, useContext } from "react";
// import { Form } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const value = useContext(UserContext)  

    const [formData, setFormData] = useState({
      id: props.id,
      name: props.name,
      Dob: props.Dob,
      email: props.email,
      avitar: props.avitar,
    });
    const handleChange = (props) => {
      const name = props.target.name
      const value = props.target.value
      setFormData({...formData, [name]: value, })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      value.dispatch({type: 'UPDATE_USER', user: formData})
      // value.dispatch({type: 'DELETE_USER', id: u.id})
    }

    return (
      <Card>
        <Form  onSubmit={handleSubmit}> 
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            label="New user"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            label="New user"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            label="New user"
            type="text"
            name="Dob"
            value={formData.Dob}
            onChange={handleChange}
          />
          </Form.Group>
          <Button type={'submit'} color="blue">Save</Button>
        </Form>
        </Card>
      );
    };
    export default UserForm;

    