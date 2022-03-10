import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
export const Checkout = () => {

    return (
        <>
            <h1>Checkout</h1>
            <form id="payment-form">
                <label htmlFor="card-element">Card</label>
                <CardElement id="card-element"/>
                <button>Pay</button>
            </form>
        </>
    )
}

export default Checkout;