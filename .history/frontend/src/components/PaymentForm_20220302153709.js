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
        const name = e.target.name;
        const value = e.target.value;

        setPaymentData({...paymentData,
            cardNumber: paymentData.cardNumber,
            expiryMonth: paymentData.expiryMonth,
            expiryYear: paymentData.expiryYear,
            CVC: paymentData.CVC
        })
    }

    return(
        <Container>
            <Row>
                <Alert variant='success'>Some text as a response</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Valid Card Number" value={paymentData.cardNumber} onChange={handleSubmit}/>
                    </Form.Group>

                    <Col className='sm-8'>
                    <Form.Group className='mt-2'>
                        <Form.Label>Expiry Date</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" placeholder="MM" value={paymentData.expiryMonth} onChange={handleSubmit}/>
                                <Form.Control type="number" placeholder="YY" value={paymentData.expiryYear} onChange={handleSubmit}/>
                            </InputGroup>
                    </Form.Group>
                    </Col>

                    <Form.Group className='mt-2'>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" placeholder="CVC" value={paymentData.CVC} onChange={handleSubmit}/>
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