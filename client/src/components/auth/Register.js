import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import {connect} from 'react-redux';
import { register } from '../../actions/auth';


const Register = ({ setAlert, register, isAuthenticated }) => {
    const[formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const onChange = e => {
        setFormData({...formData,[e.target.name] : e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Passwords Don't Match", "danger");
        }
        else{
            register(formData);
        }
    };

    if(isAuthenticated){
        return <Navigate to="/dashboard"/>
    }

    return (
    <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <input
                type="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={onChange}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Sign Up" />
        </form>
        <p className="my-1">
          Have have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    );
};


Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
