import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/login' element= { <Login/>}/>
        <Route path='/register' element = { <Register/> }/>
      </Routes>
    </Router>
  );
}

export default App;
