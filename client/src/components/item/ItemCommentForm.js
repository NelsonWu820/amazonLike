import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment} from '../../actions/item'


const ItemCommentForm = ({addComment, id}) => {
    const [formData, setFormData] = useState({
        text: '',
        rating: ''
    });

    const {text, rating} = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addComment(id, formData);
                setFormData({})
            }}>
                <input placeholder='Add a comment' type='text' name='text' value={text} onChange={onChange}/>
                <input placeholder='Add a rating' type='text' name='rating' value={rating} onChange={onChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
};


ItemCommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};


export default connect(null, {addComment})(ItemCommentForm);
