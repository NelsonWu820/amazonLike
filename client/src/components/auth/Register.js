import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import {connect} from 'react-redux';


const Register = ({ setAlert }) => {
    const[formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const onChange = e => {
        setFormData({...formData,[e.target.name] : e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Passwords Don't Match", "danger");
        }
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
                onChange={e =>onChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e =>onChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e =>onChange(e)}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={e =>onChange(e)}
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
};


export default connect(null, { setAlert })(Register);
