import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../actions/item';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';
import ItemCommentForm from './ItemCommentForm';
import ItemComment from './ItemComment';


const Item = ({getItemById, auth: {isAuthenticated}, item:{item, loading}}) => {
    const { id } = useParams();
    useEffect(() => {
       getItemById(id);    
    }, [id])

    if(loading === false){
        return (
            <div>
                <ItemDetails/>     
                {isAuthenticated ===true ? (
                    <ItemCommentForm id={id}/>
                ): (
                    <div>Please login to make an account but have it with comment form inside the comment and login link</div>
                )}
                    <div className="container justify-content-center mb-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-comments">
                                    <div className="card-body-comments">
                                        <h4 className="card-title">Recent Comments</h4>
                                        <h6 className="card-subtitle">Latest Comments section by users</h6> </div>
                                        {item.comments.length > 0 ? (
                                            item.comments.map((comment) => <ItemComment comment={comment}/>)
                                        ): (
                                            <h1>No comments yet</h1>
                                        )}
                                </div>
                            </div>
                        </div>                     
                    </div>
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
                </footer>
            </div>
        );
    }
};


Item.propTypes = {
    getItemById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {getItemById})(Item);



        
