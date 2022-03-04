import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Happy clothings</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
