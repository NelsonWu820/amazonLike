import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { getHistory } from '../../actions/cart';
import HistoryItem from './HistoryItem';


const History = ({getHistory, cart: {history, historyLoading}}) => {
    useEffect(() => {
        getHistory()
    }, [getHistory]);
    
        return (
            <section className="history-top-container">
                <section className='history container'>
                    <div className='history'>
                        {historyLoading === false && (history.map((item) => (
                            <HistoryItem id={item._id} key={item._id} item_id={item.id} history={item}/>
                        )))}
                    </div>
                </section>
                <div className="py-5 bg-dark footer-container">
                    <div ><p className="m-0 text-center text-white">Copyright &copy; AmazonLike 2023 - Published by Nelson Wu</p></div>
                </div>
            </section>
        );
};


History.propTypes = {
    cart: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, {getHistory})(History);
