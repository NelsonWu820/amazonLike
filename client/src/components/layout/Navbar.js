import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import { getCart } from '../../actions/cart';
import { connect } from 'react-redux';

const Navbar = ({logout, getCart, cart : {cart}, auth : {isAuthenticated}}) => {
    useEffect(() => {
        getCart();
    },[getCart])

    const authNav = (
        <Fragment>
            <Link className="btn btn-outline-dark" type="submit" to='/cart'>
                <i className="bi-cart-fill me-1"></i>
                    Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
            </Link>
            <Link className="btn btn-outline-dark" type="submit" to='/history'>
                <i className="bi-cart-fill me-1"></i>
                    Purchase History
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                    <a className="nav-link active" onClick={logout} href="#!">Logout</a>
                </li>
            </ul>
        </Fragment>
    )

    const guestNav = (
        <Fragment>
            <Link className="btn btn-outline-dark" type="submit" to='/cart'>
                <i className="bi-cart-fill me-1"></i>
                    Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                    <Link className="nav-link active" to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to='/register'>Sign up</Link>
                </li>
            </ul>
        </Fragment>
    )
    
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
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-search"></i>Search Tags</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="search/men's clothing">Men's clothing</Link></li>
                            <li><Link className="dropdown-item" to="search/jewelery">Jewelery</Link></li>
                            <li><Link className="dropdown-item" to="search/electronics">Electronics</Link></li>
                            <li><Link className="dropdown-item" to="search/women's clothing">Women's clothing</Link></li>
                        </ul>
                        </li>
                    </li>
                    <Fragment>{isAuthenticated ? authNav : guestNav}</Fragment>
                </ul>
            </div>
        </div>
    </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    cart: state.cart,
    auth: state.auth
})

export default connect(mapStateToProps, {logout, getCart})(Navbar);
