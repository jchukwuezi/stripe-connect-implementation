import React from 'react'
import {Container, Row, Form, Alert, Col, InputGroup, Button} from 'react-bootstrap'
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

                    <Button> Process Payment </Button>
                </Form>

            </Row>
        </Container>
    )
}

export default PaymentForm;