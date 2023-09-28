import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import ProfileForm from '../profile-form/ProfileForm'


const Dashboard = ({ getCurrentProfile, profile: {profile}, auth: {user} }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Welcome {user && user.name} </h3>
            {profile !== null ? (
                <>
                    <ProfileForm/>
                </>
            ):(
                <>
                    <h5>Please make a profile</h5>
                    <button>
                        <Link to="/create-profile" style={{color: 'black'}}>
                            Make Profile
                        </Link>
                    </button>
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

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
