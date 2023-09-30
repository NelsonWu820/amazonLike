import React from 'react';
import PropTypes from 'prop-types';

//same as Rating but for itemsHolder specifically
const RatingItems = ({rating}) => {
    return (
        <div className="ratings-comment-section-holder">
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


RatingItems.propTypes = {
    rating: PropTypes.number,
};


export default RatingItems;
