import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Main from './Main/Main';
import About from './About/About';
import Login from './Login/Login';
import Register from './Register/Register';
import Admin from './Admin/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AdminLogin" element={<Admin/>} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
