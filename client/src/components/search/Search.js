import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemByTag } from '../../actions/item';
import ItemsHolder from '../Items/ItemsHolder'

const Search = ({item: {items}, getItemByTag}) => {
    //gets items by tag and sets item state to those with those tags only
    const { tag } = useParams();
    useEffect(() => {
        getItemByTag(tag);
    },[getItemByTag, tag]);

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


Search.propTypes = {
    item: PropTypes.object.isRequired,
    getItemByTag: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, {getItemByTag})(Search);
