import React from 'react'
import {Container, Row, Form, FormGroup, Col} from 'react-bootstrap'
export const PaymentForm  =() =>{
    return(
        <Container>
            <div className='d-flex'>
                <div className='mr-auto p-2'>
                    <div className='text-left text-secondary'>
                        <Form.Group>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="password" placeholder="Valid Card Number" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PaymentForm;