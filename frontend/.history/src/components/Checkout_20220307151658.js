import React from "react";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {CardElement} from '@stripe/react-stripe-js'
const stripePromise = loadStripe("pk_live_51KKuOdJ7ft6dkEBZ7P4tugEd5vGemdEyMj1cZmYmFWgAda68n1aCZGduaqvYJKCzzdpavl9tL2pxKIcPRzO8Z7jg007NMCc9tQ")

export const Checkout = () => {

    const Wrapper = (props) =>{

    }

    return (
        <>
            <h1>Checkout</h1>
        </>
    )

}

export default Checkout;