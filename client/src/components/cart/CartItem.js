import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {cartRemoveItem} from '../../actions/cart';
import Rating from '../rating/Rating';


const CartItem = ({id, item_id, cartRemoveItem, itemObject: {image, price, title, tag, rating}}) => {
    
    return (
        <div id={id}>
                <div className="container mt-5 mb-5" key={id}>
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={image} alt='...broken'/></div>
                            <div className="col-md-6 mt-1">
                                <h5>{title}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
                                        <Rating rating={rating}/>
                                    </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Tag: {tag}</span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">${price}</h4>
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="d-flex flex-column mt-4 cart-item-btn">
                                    <Link className="btn btn-primary btn-sm" type="button" to={`/item/${item_id}`}>Details</Link>
                                    <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => cartRemoveItem(id)}>Delete</button>
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
