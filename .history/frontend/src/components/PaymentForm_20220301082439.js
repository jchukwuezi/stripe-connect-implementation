import React from 'react'
import {Container, Row, Form, Alert, Col} from 'react-bootstrap'
export const PaymentForm  =() =>{
    return(
        <Container>
            <Row>
                <Alert variant='success'>Some text as a response</Alert>
                <Form>
                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Valid Card Number"/>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}

export default PaymentForm;