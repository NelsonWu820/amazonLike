import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Dashboard = ({ profile, user }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>Welcome {user && user.name} </div>
            {profile != null ? (
                <>
                    Dashboard actions only edit
                </>
            ):(
                <>
                    <div>Please make a profile</div>
                    profile form make

                </>
            )}
        </div>
    );
};


Dashboard.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);
