import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {SignUp} from '../src/components/SignUp'
import {Login} from '../src/components/Login'
import {SuccessOnBoard} from '../src/components/SuccessOnboard'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path ="/" element={<SignUp/>} />
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/success" element={<SuccessOnBoard/>}/>
      </Routes>
    </div>

  );
}

export default App;
