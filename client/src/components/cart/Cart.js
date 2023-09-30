import React, {useEffect} from 'react';
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
        <section className='cart-top-container'>
            <section className='cart container'>
                <div className='cart'>
                    {loading === false && (cart.map((item) => (
                            <CartItem id={item._id} key={item._id} item_id={item.id} itemObject={item}/>
                    )))}
                </div>
                {/*gets the cart when btn is clicked just incase for edge cases*/}
                <button className="purchase-all-btn" onClick={() => purchase(cart)}>Purchase All</button>
            </section>
            <div className="py-5 bg-dark footer-container">
                <div ><p className="m-0 text-center text-white">Copyright &copy; AmazonLike 2023 - Published by Nelson Wu</p></div>
            </div>
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
