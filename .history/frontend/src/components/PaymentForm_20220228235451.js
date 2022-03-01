import React from 'react'
import {Container, Row, Form, FormGroup, Col, Panel} from 'react-bootstrap'

const PaymentForm  = () =>{
    return(
        <Container>
            <Row>
                <Form>
                    <Panel>
                        <Panel.Body> 
                            <h4>Stripe Payment</h4>
                            <p>Message from Server:</p>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" placeholder="Valid Card Number"/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Form.Label>Expiration Date</Form.Label>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Form.Control>
                                                        <select name="expiryMonth">
                                                            <option value="">Select Month</option>
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                            <option value="5">05</option>
                                                            <option value="6">06</option>
                                                            <option value="7">07</option>
                                                            <option value="8">08</option>
                                                            <option value="9">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                        </select>
                                                    </Form.Control>
                                                </FormGroup>
                                            </Col>

                                            <Col>
                                                <FormGroup>
                                                    <Form.Control>
                                                        <select name="expYear">
                                                            <option value="">Select Year</option>
                                                            <option value="20">2020</option>
                                                            <option value="21">2021</option>
                                                            <option value="22">2022</option>
                                                            <option value="23">2023</option>
                                                            <option value="24">2024</option>
                                                            <option value="25">2025</option>
                                                            <option value="26">2026</option>
                                                            <option value="27">2027</option>
                                                            <option value="28">2028</option>
                                                            <option value="29">2029</option>
                                                            <option value="30">2030</option> 
                                                        </select>
                                                    </Form.Control>
                                                </FormGroup>
                                            </Col>

                                            <Col>
                                                <FormGroup>
                                                    <Form.Label>CVV Code</Form.Label>
                                                    <Form.Control type="text" placeholder="CVC"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Form>
            </Row>
        </Container>
    );
}

export default PaymentForm;