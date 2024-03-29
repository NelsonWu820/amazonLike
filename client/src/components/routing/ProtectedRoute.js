import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

//checks if auth, if not go into login page
const ProtectedRoute = ({ component: Component, auth: { isAuthenticated }}) => {
    if(isAuthenticated) return <Component/>
    return <Navigate to="/login" />;
};


ProtectedRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps)(ProtectedRoute);
