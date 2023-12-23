import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store.ts";
import React from "react";
import { addContactInfo } from "./contactFormSlice.ts";

const ContactForm = () => {

  const dispatch: AppDispatch = useDispatch()
  const contactState = useSelector((state: RootState)=>state.contactForm)

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const userInput = {
      key: e.target.name,
      value: e.target.value
    }
    dispatch(addContactInfo(userInput))
  }

  const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(contactState)
  }


  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={changeHandler} type="text" placeholder="John Doe" required name="name" id="name"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control onChange={changeHandler} type="tel" placeholder="0-123-222-111" required name="phone" id="phone"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={changeHandler} type="email" placeholder="example@mail.com" name="email" id="email"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control onChange={changeHandler} type="url" placeholder="https://profilephoto.com/id/123123" name="photoUrl" id="photoUrl"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <img src="https://placehold.co/150x150" alt="profile picture" className="rounded-circle"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;