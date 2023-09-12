import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import {connect} from 'react-redux';


const Cart = ({cart: {cart}}) =>  (
        <div>
            {cart.map((item) => <CartItem id={item}/>)}
            <button>Purchase All</button>
        </div>
    );


Cart.propTypes = {
    cart: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart);
