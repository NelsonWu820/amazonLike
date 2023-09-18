import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import {connect} from 'react-redux';
import { getCart } from '../../actions/cart';
import {historyAddItem} from '../../actions/cart';


const Cart = ({getCart, historyAddItem, cart: {cart, loading}}) => {
    useEffect(() =>{
        getCart();
    },[getCart])

    const purchase = (cart) => {
        historyAddItem(cart);
    }


    return(
        <section className='cart container'>
            <div className='cart'>
                {loading === false && (cart.map((item) => (
                        <CartItem id={item._id} item_id={item.id} itemObject={item}/>
                )))}
            </div>
            {/*gets the cart whne btn is clicked just incase for edge cases*/}
            <button onClick={() => purchase(cart)}>Purchase All</button>
        </section>
    );
};


Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    getCart: PropTypes.func.isRequired,
    historyAddItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, {getCart, historyAddItem})(Cart);
