import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { deleteAccount } from '../../actions/profile';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const AuthLinks = ({deleteAccount, logout, user}) => (
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle navbar-avatar p-2 d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="round p-2"><img src={user.avatar} alt="user" width="50"/></span>
                            <div>{user.name}</div>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="dropdown-item btn" type="submit" to='/history'>
                                <i className="bi-cart-fill me-1"></i>
                                    Purchase History
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item btn" type="submit" to='/dashboard'>
                                DashBoard
                            </Link>
                        </li>
                        <li className="deleteAccount">
                            <button className="dropdown-item btn" onClick={() => deleteAccount()}>
                                <div className="deleteAccount-text">
                                    Delete Account
                                </div>
                            </button>
                        </li>
                        <li>
                            <Link className="dropdown-item btn" onClick={logout} to='/'>Logout</Link>
                        </li>
                    </ul>
                </li>
);


AuthLinks.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
};


export default connect(null, {logout, deleteAccount})(AuthLinks);
