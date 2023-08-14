import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Landing/>}/>
          <Route path='/login' element= { <Login/>}/>
          <Route path='/register' element = { <Register/> }/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
