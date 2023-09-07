import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllItems } from '../../actions/item';
import { connect } from 'react-redux';
import ItemsHolder from './ItemsHolder';


const Items = ({ item: {items}, getAllItems}) => {
    useEffect(() => {
        getAllItems();
    },[getAllItems])

    


    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {items.map((itemCover) => <ItemsHolder item={itemCover} key={itemCover._id}/>)}
                </div>
            </div>
        </section>
    );
};


Items.propTypes = {
    item: PropTypes.object.isRequired,
    getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, {getAllItems})(Items);
