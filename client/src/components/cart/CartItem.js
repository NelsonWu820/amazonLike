import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItemById} from '../../actions/item';
import {cartRemoveItem} from '../../actions/cart';


const CartItem = ({id, cartRemoveItem, getItemById, item: {loading, item: {title, image, rating, tag, price}}}) => {
    useEffect(() => {
        getItemById(id);    
    }, [getItemById, id])

    return (
        <div>
            {loading === false && (
                <div>
                    <h1>{title}</h1>
                    <img src={image} alt="../" style={{width: 300, height: 300}}></img>
                    <div>{rating}</div>
                    <div>{tag}</div>
                    <div>{price}</div>
                    <button onClick={() => cartRemoveItem(id)}>Delete</button>
                </div>
            )}
        </div>
    );
};


CartItem.propTypes = {
    getItemById: PropTypes.func.isRequired,
    cartRemoveItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    item: state.item
})


export default connect(mapStateToProps, {getItemById, cartRemoveItem})(CartItem);
