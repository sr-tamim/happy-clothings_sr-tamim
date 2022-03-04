import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

export const CartContext = createContext()

function App() {
  const [cart, useCart] = useState([])
  return (
    <BrowserRouter><CartContext.Provider value={{ cart, useCart }}>
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </main>
    </CartContext.Provider></BrowserRouter>
  );
}

export default App;
