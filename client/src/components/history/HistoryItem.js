import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';


const HistoryItem = ({id, item_id, history: {image, price, title, tag, rating}}) =>(
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
                        <div className="d-flex flex-column mt-4 cart-item-btn">
                            <Link className="btn btn-primary btn-sm" type="button" to={`/item/${item_id}`}>Details</Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    );


HistoryItem.propTypes = {
    history: PropTypes.object.isRequired,
};


export default HistoryItem;
