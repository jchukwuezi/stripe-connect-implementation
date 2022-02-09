import React, {useState, useEffect} from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export const SignUp =() =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")
    const [password, setPassword] = useState("")
    const [businessType, setBusinessType] = useState("")

    const handleSubmit =(e) =>{
        fetch("http://localhost:7777/api/express-users/register" ,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                description: desc,
                password: password,
                businessType: businessType
            })
        })
        .then(async res =>{
            if(!res.ok){
                alert(await res.text())
            }
            const data = await res.json()
            console.log('response from client....')
            console.log(data)
        })
    }

    return(
        <Container>
            <h1 className="text-primary mt-5 p-3 text-center">Register to create a stripe account</h1>
            <Row className="mt-5">
                <Col lg={5} sm={12} className="p-5 m-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mt-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={e=> setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter password" onChange={e=> setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-2">
                            <Form.Label>Description of Organisation</Form.Label>
                            <Form.Control type="text" placeholder="What is the purpose of this organisation" onChange={e=> setDesc(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-2">
                            <Form.Label>Type of Organisation</Form.Label>
                            <Form.Control type="text" placeholder="Are you an individual, company or non profit" onChange={e=> setBusinessType(e.target.value)} />
                        </Form.Group>
                        
                        <Button className="mt-5" type="submit">
                            Submit
                        </Button>
                    
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;
