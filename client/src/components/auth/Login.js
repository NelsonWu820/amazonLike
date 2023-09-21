import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';


const Login = ({login, isAuthenticated}) => {
    const [formData, setFormdata] = useState({
      email: '',
      password: ''
    })

    const { email, password } = formData;

    const onChange = e => {
      setFormdata({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
      e.preventDefault();
      login(email, password);
    }
    
    if(isAuthenticated){
      return <Navigate to="/dashboard" />
    }

    return (
    <section className="form container">
        <div className="login form">
          <header>Login</header>
          <form className="form" onSubmit={onSubmit}>
            <input 
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onChange}
            />
            <input
                type="password"
                placeholder="Enter your password"
                name="password"
                minLength="6"
                value={password}
                onChange={onChange}
            />
            <input type="submit" className="button" value="Login"/>
          </form>
          <div className="signup">
            <span className="signup">Don't have an account?
              <div></div>
              <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </div>
      </section>
    );
};


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);
