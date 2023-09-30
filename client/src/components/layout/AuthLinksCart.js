import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinksCart = ({length}) => {
    return (
        <li className="nav-item">
            <Link className="btn btn-outline-dark" type="submit" to='/cart'>
                <i className="bi-cart-fill me-1"></i>
                    Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{length}</span>
            </Link>
        </li>
    );
};

export default AuthLinksCart;
