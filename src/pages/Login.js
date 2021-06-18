import React from "react";
import { Button, Form, FormGroup, Label, Input,Col,Jumbotron } from 'reactstrap';
import { signIn } from "../store/actions/userActions";
import {useDispatch} from "react-redux";

export default function Login() {

  const dispatch = useDispatch();

  const clickedToLoginButton=()=>{
    // event.preventDefault();
    dispatch(signIn({name:"deneme"}))

  }
    



  return (
    <div>
        <Col sm={{ size: '6', offset: 1 }} style={{marginTop:"100px"}}>
      <Form>
          <Jumbotron> <h3>Giriş Yap</h3></Jumbotron>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button onClick={()=>clickedToLoginButton()}>Submit</Button>
      </Form>
      </Col>
    </div>
  );
}
