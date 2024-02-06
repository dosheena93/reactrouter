import { useState } from 'react'
import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/home">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/red" element={<Red />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
      <p className="read-the-docs"></p>
    </>
  )
}

export default App
