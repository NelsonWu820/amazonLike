import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import formatDate from '../../utils/formatDate';


const ItemComment = ({comment: {name, avatar, rating, text, date}}) => {

    return (

        <div>
            <h1>{name}</h1>
            <img src={avatar}/>
            <Rating rating={rating}/>
            <div>{text}</div>
            <div>{formatDate(date)}</div>
        </div>
    );
};


ItemComment.propTypes = {
    comment: PropTypes.object.isRequired,
};


export default ItemComment;
