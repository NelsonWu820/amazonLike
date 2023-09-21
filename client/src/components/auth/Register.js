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
        <section className="form container">
            <div className='sign form'>
                <header>Signup</header>
                <form className="form" onSubmit={onSubmit}>
                    <input
                        type="name"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value={password2}
                        onChange={onChange}
                    />
                    <input type="submit" className="button" value="Signup"/>
                </form>
                <div className="signup">
                    <span className="signup">Already have an account?
                    <div></div>
                    <Link to="/login">Sign In</Link>
                    </span>
                </div>
            </div>
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
