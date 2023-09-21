import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useMatch, useNavigate } from 'react-router-dom';
import { getCurrentProfile, updateProfile } from '../../actions/profile';

const initialState = {
    address: '',
    card1 : '',
    card2 : '',
    card3 : '',
    sex : '',
    age : ''
}

const ProfileForm = ({profile: {profile, loading}, getCurrentProfile, updateProfile}) => {
    const [formData, setFormData] = useState(initialState)

    const {
        address,
        card1, 
        card2, 
        card3, 
        sex, 
        age 
    } = formData

    //fills in update profile if current profile already has some info
    useEffect(() => {
        if(!profile) getCurrentProfile();

        if (!loading && profile) {
            const profileData = { ...initialState };
            for (const key in profile) {
              if (key in profileData) profileData[key] = profile[key];
            }

            setFormData(profileData)
        }

    }, [loading, profile, getCurrentProfile]);

    const creatingProfile = useMatch('/create-profile');

    const navigate = useNavigate(); 

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        const editing = profile ? true : false;
        e.preventDefault();
        updateProfile(formData, editing).then(() => {
            if(!editing) navigate('/dashboard');
        });
    }

    return (
        
        <div>
            <section className="form container">
                <div className='profile form'>
                    <header>
                        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
                    </header>
                    <form className="form" onSubmit={onSubmit}>
                        <input type='text' placeholder='address' name='address' value={address} onChange={onChange}/>
                        <input type='text' placeholder='card1' name='card1' value={card1} onChange={onChange}/>
                        <input type='text' placeholder='card2' name='card2' value={card2} onChange={onChange}/>
                        <input type='text' placeholder='card3' name='card3' value={card3} onChange={onChange}/>
                        <input type='text' placeholder='gender' name='sex' value={sex} onChange={onChange}/>
                        <input type='text' placeholder='age' name='age' value={age} onChange={onChange}/>
                        <input type='submit'className="button" value="Submit"/>
                    </form>
                </div>
            </section>
        </div>
    );
};


ProfileForm.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
})


export default connect(mapStateToProps, {getCurrentProfile, updateProfile})(ProfileForm);
