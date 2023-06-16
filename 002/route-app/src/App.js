import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link><br/>
      <Link to="/about">About</Link>
    
    <Routes>
    < Route path="/" element={ <Home /> } />
    < Route path="/about" element={ <About /> } />
    </Routes>

    </div>
  );
}

export default App;
