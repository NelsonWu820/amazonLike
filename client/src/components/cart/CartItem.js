import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {cartRemoveItem} from '../../actions/cart';
import Rating from '../rating/Rating';


const CartItem = ({id, item_id, cartRemoveItem, itemObject: {image, price, title, tag, rating}}) => {
    useEffect(() => {

    }, [cartRemoveItem])
    
    

    return (
        <div id={id}>
                <div class="container mt-5 mb-5" key={id}>
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="row p-2 bg-white border rounded">
                            <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={image}/></div>
                            <div class="col-md-6 mt-1">
                                <h5>{title}</h5>
                                <div class="d-flex flex-row">
                                    <div class="ratings mr-2">
                                        <Rating rating={rating}/>
                                    </div>
                                </div>
                                <div class="mt-1 mb-1 spec-1"><span>Tag: {tag}</span></div>
                            </div>
                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div class="d-flex flex-row align-items-center">
                                    <h4 class="mr-1">${price}</h4>
                                </div>
                                <h6 class="text-success">Free shipping</h6>
                                <div class="d-flex flex-column mt-4 cart-item-btn">
                                    <Link class="btn btn-primary btn-sm" type="button" to={`/item/${item_id}`}>Details</Link>
                                    <button class="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => cartRemoveItem(id)}>Delete</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


CartItem.propTypes = {
    cartRemoveItem: PropTypes.func.isRequired,
};


export default connect(null, { cartRemoveItem})(CartItem);
