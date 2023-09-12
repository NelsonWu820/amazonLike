import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import {cartAddItem} from '../../actions/cart'
import { connect } from 'react-redux';


const ItemsHolder = ({cartAddItem, item : {title, image, price, _id, rating}}) => (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top itemHolder" src={image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        ${price}
                    </div>
                    <Rating rating={rating}/>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/item/${_id}`}>View Details</Link></div>
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => cartAddItem(_id)}>Add To Cart</button></div>
                </div>
            </div>
        </div>
    );


ItemsHolder.propTypes = {
    item: PropTypes.object.isRequired,
    cartAddItem: PropTypes.func.isRequired,
};


export default connect(null, {cartAddItem})(ItemsHolder);
