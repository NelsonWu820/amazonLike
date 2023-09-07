import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../actions/item';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';
import ItemCommentForm from './ItemCommentForm';


const Item = ({getItemById}) => {
    const { id } = useParams();
    useEffect(() => {
        getItemById(id);    
    }, [getItemById, id])

    return (
        <div>
            <ItemDetails/>
            <ItemCommentForm id={id}/>
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
            </footer>
        </div>
    );
};


Item.propTypes = {
    getItemById: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {getItemById})(Item);



        
