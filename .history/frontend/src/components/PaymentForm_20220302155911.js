import React, { useState } from 'react'
import {Container, Row, Form, Alert, Col, InputGroup, Button} from 'react-bootstrap'
export const PaymentForm  =() =>{

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        CVC: ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(paymentData)
        console.log("Button was clicked")
    }

    return(
        <Container>
            <Row>
                <Alert variant='success'>Some text as a response</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Valid Card Number" value={paymentData.cardNumber} onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}/>
                    </Form.Group>

                    <Col className='sm-8'>
                    <Form.Group className='mt-2'>
                        <Form.Label>Expiry Date</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" placeholder="MM" value={paymentData.expiryMonth} onChange={(e) => setPaymentData({...paymentData, expiryMonth: e.target.value})}/>
                                <Form.Control type="number" placeholder="YY" value={paymentData.expiryYear} onChange={(e) => setPaymentData({...paymentData, expiryYear: e.target.value})}/>
                            </InputGroup>
                    </Form.Group>
                    </Col>

                    <Form.Group className='mt-2'>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" placeholder="CVC" value={paymentData.CVC} onChange={(e) => setPaymentData({...paymentData, CVC: e.target.value})}/>
                    </Form.Group>

                    <Button className='btn-block mt-3'> Process Payment </Button>
                
                </Form>

            </Row>
        </Container>
    )
}

export default PaymentForm;