import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import {Container, Card, Button} from "react-bootstrap"
export const Checkout = () => {

    return (
        <Container>
            <h1>Checkout</h1>
            <Card>
                <form id="payment-form">
                    <label htmlFor="card-element">Card</label>
                    <CardElement id="card-element"/>
                    <Button>Pay</Button>
                </form>
            </Card>
        </Container>
    )
}

export default Checkout;