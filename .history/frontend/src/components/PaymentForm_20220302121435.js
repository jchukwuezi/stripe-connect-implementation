import React, { useState } from 'react'
import {Container, Row, Form, Alert, Col, InputGroup, Button} from 'react-bootstrap'
export const PaymentForm  =() =>{

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        CVC: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("", {
            credentials: 'include',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                cardNumber: paymentData.cardNumber,
                expiryMonth: paymentData.expiryMonth,
                expiryYear: paymentData.expiryYear,
                CVC: paymentData.CVC
            }),
        })
    }

    return(
        <Container>
            <Row>
                <Alert variant='success'>Some text as a response</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Valid Card Number" onChange={e => setPaymentData()}/>
                    </Form.Group>

                    <Col className='sm-8'>
                    <Form.Group className='mt-2'>
                        <Form.Label>Expiry Date</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" placeholder="MM"/>
                                <Form.Control type="number" placeholder="YY"/>
                            </InputGroup>
                    </Form.Group>
                    </Col>

                    <Form.Group className='mt-2'>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" placeholder="CVC"/>
                    </Form.Group>

                    <Row>
                        <Button className='btn-block mt-3'> Process Payment </Button>
                    </Row>
                </Form>

            </Row>
        </Container>
    )
}

export default PaymentForm;