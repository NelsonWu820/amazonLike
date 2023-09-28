import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import formatDate from '../../utils/formatDate';


const ItemComment = ({comment: {name, avatar, rating, text, date}}) => {

    return (
        <div className="comment-widgets m-b-20">
            <div className="d-flex flex-row comment-row">
                <div className="p-2"><span className="round"><img src={avatar} alt="user" width="50"/></span></div>
                <div className="comment-text w-100">
                    <h5>{name}</h5>
                    <div className="comment-footer">
                        <span className="date">{formatDate(date)}</span>
                    </div>
                    <span className="action-icons">
                            <Rating rating={rating}/>
                    </span>
                    <p className="m-b-5 m-t-10">{text}</p>
                </div>
            </div>
        </div>
    );
};


ItemComment.propTypes = {
    comment: PropTypes.object.isRequired,
};


export default ItemComment;
