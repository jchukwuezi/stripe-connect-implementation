import React, {useState} from "react";
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:7777/api/express-users/login", {
            credentials: 'include',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then((res) => {
            if(!res.ok){
                const errorCheck = async() =>{
                    alert(await res.text())
                } 
                errorCheck()
            }

            navigate(res.text)
        })
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col lg={5} sm={12} className="p-5 m-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mt-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" onChange={e=> setPassword(e.target.value)} />
                        </Form.Group>
                    
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login