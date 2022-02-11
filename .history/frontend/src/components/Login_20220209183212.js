import React, {useState} from "react";
import {Form, Container, Row, Col, Button} from 'react-bootstrap'

export const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {

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