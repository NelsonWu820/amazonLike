import React, { useState } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';
import { getCurrentProfile, updateProfile } from '../../actions/profile';

const initalState = {
    address: '',
    card1 : '',
    card2 : '',
    card3 : '',
    sex : '',
    age : ''
}

const ProfileForm = () => {
    const [formData, setFormData] = useState(initalState)

    const {
        address,
        card1, 
        card2, 
        card3, 
        sex, 
        age 
    } = formData

    //fills in update profile if current profile already has some info
    

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        updateProfile(formData);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='address' name='address' value={address} onChange={onChange}/>
                <input type='text' placeholder='card1' name='card1' value={card1} onChange={onChange}/>
                <input type='text' placeholder='card2' name='card2' value={card2} onChange={onChange}/>
                <input type='text' placeholder='card3' name='card3' value={card3} onChange={onChange}/>
                <input type='text' placeholder='gender' name='sex' value={sex} onChange={onChange}/>
                <input type='text' placeholder='age' name='age' value={age} onChange={onChange}/>
                <input type='submit'/>
            </form>
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
