import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Rating from '../rating/Rating'
import { cartAddItem } from '../../actions/cart';
import { setAlert } from '../../actions/alert';


const ItemDetails = ({isAuthenticated, cartAddItem, setAlert, item: {item: {image, tag, description, title, price, rating, _id}}}) => {
    const [amount, setAmount] = useState(1)

    //loops thorugh the num of items inputed and adds them to cart


    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={image} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">{tag}</div>
                            <h1 className="display-5 fw-bolder">{title}</h1>
                            <div className="item-details-price">
                                ${price}
                            </div>
                            <Rating rating={rating}/>
                            <p className="lead">{description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value={amount} 
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <button className="btn btn-outline-dark flex-shrink-0" onClick={(e) => {
                                    e.preventDefault();
                                    if(isAuthenticated){
                                        cartAddItem({amount}, _id);
                                    }
                                    else{
                                        setAlert("Please login to add to cart", "danger");
                                    }
                                    }}>
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


ItemDetails.propTypes = {
    item: PropTypes.object.isRequired,
    cartAddItem: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {cartAddItem, setAlert})(ItemDetails);
