import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import {Container, Form} from "react-bootstrap"
export const Checkout = () => {

    return (
        <Container>
            <h1>Checkout</h1>
            <form id="payment-form">
                <label htmlFor="card-element">Card</label>
                <CardElement id="card-element"/>
                <button>Pay</button>
            </form>

            <Form>
                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <CardElement id="card-element"/>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Checkout;