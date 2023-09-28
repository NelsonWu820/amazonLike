import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingItems from '../rating/RatingItems';
import {cartAddItem} from '../../actions/cart'
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

const amount = 1;


const ItemsHolder = ({isAuthenticated, cartAddItem, setAlert, item : {title, image, price, _id, rating}}) => (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top itemHolder" src={image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        ${price}
                    </div>
                    <RatingItems rating={rating}/>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/item/${_id}`}>View Details</Link></div>
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                    onClick={(e) => {
                        e.preventDefault();
                        if(isAuthenticated){
                            cartAddItem({amount}, _id);
                        }
                        else{
                            setAlert("Please login to add to cart", "danger");
                        }
                    }}>Add To Cart</button></div>
                </div>
            </div>
        </div>
    );


ItemsHolder.propTypes = {
    item: PropTypes.object.isRequired,
    cartAddItem: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });


export default connect(mapStateToProps, {cartAddItem, setAlert})(ItemsHolder);
