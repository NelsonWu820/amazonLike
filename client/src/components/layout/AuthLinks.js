import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { deleteAccount } from '../../actions/profile';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const AuthLinks = ({deleteAccount, logout, user, length}) => (
            <ul className="navbar  navbar-light bg-light">
                <li className="nav-item">
                    <Link className="btn btn-outline-dark" type="submit" to='/cart'>
                        <i className="bi-cart-fill me-1"></i>
                            Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{length}</span>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="p-2"><span className="round"><img src={user.avatar} alt="user" width="50"/></span></div>
                        <div>{user.name}</div>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="btn" type="submit" to='/history'>
                                <i className="bi-cart-fill me-1"></i>
                                    Purchase History
                            </Link>
                        </li>
                        <li>
                            <Link className="btn" type="submit" to='/dashboard'>
                                DashBoard
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => deleteAccount()}>
                                Delete Account
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" onClick={logout} to='/'>Logout</Link>
                        </li>
                    </ul>
                </li>
            </ul>
);


AuthLinks.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
};


export default connect(null, {logout, deleteAccount})(AuthLinks);
