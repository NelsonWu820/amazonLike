import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Dashboard from './components/dashboard/Dashboard';
import ProfileForm from './components/profile-form/ProfileForm';
import Item from './components/item/Item';
import Cart from './components/cart/Cart';
import History from './components/history/History';
import Search from './components/search/Search';

import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './actions/types';
import { loadUser } from './actions/auth';

import store from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Alert/>
        <Routes>
          <Route path='/' element={ <Landing/>}/>
          <Route path='login' element= { <Login/>}/>
          <Route path='register' element = { <Register/> }/>
          <Route path="dashboard" element={<ProtectedRoute component={Dashboard} />}/>
          <Route path="create-profile" element={<ProtectedRoute component={ProfileForm} />}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="history" element={<History/>}/>
          <Route path="search/:tag" element={<Search/>}/>
          <Route path='item/:id' element = { <Item/> }/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
