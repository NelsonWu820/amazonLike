import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({logout}) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <Link className="navbar-brand" to="/">AmazonLike</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="#!">About</Link></li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#!">All Products</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#!">Popular Items</Link></li>
                            <li><Link className="dropdown-item" to="#!">New Arrivals</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/register'>Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={logout} href="#!">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(Navbar);
