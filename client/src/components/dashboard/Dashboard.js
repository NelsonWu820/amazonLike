import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import ProfileForm from '../profile-form/ProfileForm'


const Dashboard = ({ getCurrentProfile, deleteAccount, profile: {profile}, auth: {user} }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return (
        <div>
            <h1>Dashboard</h1>
            <div>Welcome {user && user.name} </div>
            {profile !== null ? (
                <>
                    <ProfileForm/>
                    <button onClick={() => deleteAccount()}>
                        Delete Account
                    </button>
                </>
            ):(
                <>
                    <div>Please make a profile</div>
                    <Link to="/create-profile">
                        Make Profile
                    </Link>
                </>
            )}
        </div>
    );
};


Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);
