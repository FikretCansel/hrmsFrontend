import React from 'react'
import { Button, Form, FormGroup, Label, Input,Col,Jumbotron } from 'reactstrap';

export default function Register() {
    return (
        <div>
            <Col sm={{ size: '6', offset: 1 }} style={{marginTop:"100px"}}>
      <Form>
          <Jumbotron> <h3>Kayıt Ol</h3></Jumbotron>
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
        <Button>Submit</Button>
      </Form>
      </Col>
        </div>
    )
}
