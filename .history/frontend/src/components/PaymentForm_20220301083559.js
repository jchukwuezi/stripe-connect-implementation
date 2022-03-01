import React from 'react'
import {Container, Row, Form, Alert, Col, InputGroup} from 'react-bootstrap'
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

                <Col className='sm-8'>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control type="number" placeholder="MM"/>
                            <Form.Control type="number" placeholder="YY"/>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentForm;