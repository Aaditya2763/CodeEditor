
import './App.css';
import NavbarBox from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './components/home/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="d-flex flex-column" style={{ overflow: "hidden" }}>
          <NavbarBox  />

          <Routes>
          <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={< Signup/>} />
            <Route exact path="/" element={<Home />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
