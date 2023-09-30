import React from 'react';
import PropTypes from 'prop-types';

//just changes star to orange if it's above or equal else black
const Rating = ({rating}) => {

    return (
        <div>
            <div className="ratings-comment-section">
                    <span style={{color: rating >= 1 ? "orange": "black"}}>★</span>
                    <span style={{color: rating >= 2 ? "orange": "black"}}>★</span>
                    <span style={{color: rating >= 3 ? "orange": "black"}}>★</span>
                    <span style={{color: rating >= 4 ? "orange": "black"}}>★</span>
                    <span style={{color: rating >= 5 ? "orange": "black"}}>★</span>
            </div>
        </div>
    );
};


Rating.propTypes = {
    rating: PropTypes.number,
};


export default Rating;
