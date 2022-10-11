import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cashbook from './components/Cashbook';
import Debts from './components/Debts';
import Invoice from './components/Invoice';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cashbook />} />
          <Route path='/debts' element={<Debts />} />
          <Route path='/invoice' element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
