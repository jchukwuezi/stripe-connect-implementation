import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {SignUp} from '../src/components/SignUp'
import {Login} from '../src/components/Login'
import {SuccessOnBoard} from '../src/components/SuccessOnboard'
import {FailureOnBoard} from '../src/components/FailureOnBoard'
import {PaymentForm} from '../src/components/PaymentForm'
import {Checkout} from '../src/components/Checkout'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51KKuOdJ7ft6dkEBZBzzUOfBBNunxjWTLiRwrf8k19BcgKdqdKX2frTznZIHJucooD9jps1JFmnwMTd4ZNlJ1EFTH00FIDwe1x8")

function App() {
  return (
    <div>
      <Routes>
        <Route exact path ="/" element={<SignUp/>} />
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/success" element={<SuccessOnBoard/>}/>
        <Route path = "/failure" element={<FailureOnBoard/>}/>
        <Route path = "/payment" element={<PaymentForm/>}/>
        <Route path = "/checkout" element={()=> (
            <Elements stripe={stripePromise}>
              <Checkout/>
            </Elements>
        )}/>
      </Routes>
    </div>

  );
}

export default App;
