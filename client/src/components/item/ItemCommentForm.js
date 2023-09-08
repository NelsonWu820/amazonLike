import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment} from '../../actions/item'


const ItemCommentForm = ({addComment, id}) => {
    const [formData, setFormData] = useState({
        text: '',
        rating: 0
    });

    const {text, rating} = formData;

    const onClick = (num) => {
        setFormData({rating: num});

    }

    const changeStar = (num) => {
        if(rating === 0){
            return  {color: 'none'}
        }
        else if(rating >= num){
            return {color: 'orange'}
        }
        else{
            return  {color: 'black'}
        }
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addComment(id, formData);
            }}>
                <input placeholder='Add a comment' type='text' name='text' value={text} onChange={onChange}/>
                <div class="ratings-wrapper">
                <div data-productid={id} className="ratings">
                        <span style={changeStar(5)} onClick={() => onClick(5)}>★</span>
                        <span style={changeStar(4)} onClick={() => onClick(4)}>★</span>
                        <span style={changeStar(3)} onClick={() => onClick(3)}>★</span>
                        <span style={changeStar(2)} onClick={() => onClick(2)}>★</span>
                        <span style={changeStar(1)} onClick={() => onClick(1)}>★</span>
                    </div>
                </div>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    );
};


ItemCommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};


export default connect(null, {addComment})(ItemCommentForm);
