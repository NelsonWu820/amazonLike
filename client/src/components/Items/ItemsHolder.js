import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ItemsHolder = ({item : {title, image, price, _id}}) => (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top itemHolder" src={image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        ${price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/item/${_id}`}>View Details</Link></div>
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" >Add To Cart</a></div>
                </div>
            </div>
        </div>
    );


ItemsHolder.propTypes = {
    item: PropTypes.object.isRequired,
};


export default ItemsHolder;
