import React from 'react'
import {Form, Button, Container} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  console.log("test");
    const navigate = useNavigate();
    const loginUser = (event)=>{
        event.preventDefault(); // 새로고침 안하게 해주는 함수, form을 쓸 때 꼭 써주어여한다.
        console.log("로그인");
        setAuthenticate(true);
        navigate("/")
    }
  return (
    <Container>
    <Form onSubmit={(event)=>loginUser(event)}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="emai l" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login
