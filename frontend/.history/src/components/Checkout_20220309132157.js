import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {Container, Card, Button} from "react-bootstrap"
export const Checkout = () => {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        //create payment intent on the server
        const {clientSecret} = await fetch('http://localhost:7777/api/express-users/create-payment-intent', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'eur',

            }),
        })
        .then(r => r.json())

        //confirm payment on the client
        const {paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        )

        console.log(paymentIntent)
    }

    return (
        <Container>
            <h1>Checkout</h1>
            <form id="payment-form" onSubmit={handleSubmit}>
                <label htmlFor="card-element">Card</label>
                <CardElement id="card-element" className="mt-3"/>
                <button class="mt-4 primary"> Pay</button>
            </form>
        </Container>
    )
}

export default Checkout;