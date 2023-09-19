import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const HistoryItem = ({ history: {_id , title}}) =>(
        <div key={_id}>
            {title}
        </div>
    );


HistoryItem.propTypes = {
    history: PropTypes.object.isRequired,
};


export default HistoryItem;
