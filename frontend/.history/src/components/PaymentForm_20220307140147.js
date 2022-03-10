import React, { useState } from 'react'
import {Container, Row, Form, Alert, Col, InputGroup, Button} from 'react-bootstrap'
import {CardElement} from '@stripe/react-stripe-js'
export const PaymentForm  =() =>{

    const [cardNumber, setCardNumber] = useState("")
    const [expiryMonth, setExpiryMonth] = useState("")
    const [expiryYear, setExpiryYear] = useState("")
    const [CVC, setCVC] = useState("")
    

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("Button was clicked")
        if(!cardNumber || !expiryMonth || !expiryYear || !CVC){
            console.log("All details were not filled")
        }

        //creating payment intent on the server side
        const {clientSecret} = await fetch("http://localhost:7777/api/express-users/create-payment-intent", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            
        })
        
    }

   

    {/*
        <Container>
            <Row>
                <Alert variant='success'>Some text as a response</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Valid Card Number" onChange={e=> setCardNumber(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Card</Form.Label>
                        <CardElement id="card-element" />
                    </Form.Group>

                    <Col className='sm-8'>
                    <Form.Group className='mt-2'>
                        <Form.Label>Expiry Date</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" placeholder="MM" onChange={e=> setExpiryMonth(e.target.value)}/>
                                <Form.Control type="number" placeholder="YY" onChange={e=> setExpiryYear(e.target.value)}/>
                            </InputGroup>
                    </Form.Group>
                    </Col>

                    <Form.Group className='mt-2'>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" placeholder="CVC" onChange={e=> setCVC(e.target.value)}/>
                    </Form.Group>

                    <Row>
                        <Button className='btn-block mt-3' type='submit'> Process Payment </Button>
                    </Row>

                </Form>

            </Row>
        </Container>
    )

    */}
    return (
        <Container>
            <h1>Card</h1>
            <form id='payment-form'>
                <button>Pay</button>
            </form>
        </Container>
    )
}

export default PaymentForm;