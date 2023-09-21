import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Rating from '../rating/Rating'
import { cartAddItem } from '../../actions/cart';


const ItemDetails = ({cartAddItem, item: {item: {image, tag, description, title, price, rating, _id}}}) => {
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
                            <div className="fs-5 mb-5">
                                <span>${price}</span>
                            </div>
                            <Rating rating={rating}/>
                            <p className="lead">{description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value={amount} 
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <button className="btn btn-outline-dark flex-shrink-0" onClick={() => cartAddItem({amount}, _id)}>
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
};

const mapStateToProps = state => ({
    item: state.item
})


export default connect(mapStateToProps, {cartAddItem})(ItemDetails);
