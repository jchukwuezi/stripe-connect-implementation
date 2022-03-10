import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import {Container, Form} from "react-bootstrap"
export const Checkout = () => {

    return (
        <Container>
            <h1>Checkout</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control>
                        <CardElement id="card-element" />
                    </Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Checkout;