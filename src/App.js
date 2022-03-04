import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export const CartContext = createContext()

function App() {
  const [cart, useCart] = useState([])
  return (
    <BrowserRouter><CartContext.Provider value={{ cart, useCart }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Happy clothings</h1>} />
        </Routes>
      </div>
    </CartContext.Provider></BrowserRouter>
  );
}

export default App;
