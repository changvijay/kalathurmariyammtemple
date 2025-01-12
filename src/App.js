import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Payment from './template/payment.js'; 
import {Home} from './template/home.js'; 
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
