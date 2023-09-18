import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cartRemoveItem} from '../../actions/cart';


const CartItem = ({id, item_id, cartRemoveItem, itemObject: {image}}) => {
    useEffect(() => {

    }, [cartRemoveItem])
    
    

    return (
        <div id={id}>
                <div key={id}>
                    <img src={image}/>
                    <button onClick={() => cartRemoveItem(id)}>Delete</button>
                </div>
        </div>
    );
};


CartItem.propTypes = {
    cartRemoveItem: PropTypes.func.isRequired,
};


export default connect(null, { cartRemoveItem})(CartItem);
