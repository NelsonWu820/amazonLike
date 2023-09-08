import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({rating}) => {

    return (
        <div className="ratings">
                <span style={{color: rating >= 5 ? "orange": "black"}}>★</span>
                <span style={{color: rating >= 4 ? "orange": "black"}}>★</span>
                <span style={{color: rating >= 3 ? "orange": "black"}}>★</span>
                <span style={{color: rating >= 2 ? "orange": "black"}}>★</span>
                <span style={{color: rating >= 1 ? "orange": "black"}}>★</span>
        </div>
    );
};


Rating.propTypes = {
    rating: PropTypes.number,
};


export default Rating;
