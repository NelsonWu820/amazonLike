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
            <section className='history container'>
                Workds
                <div className='history'>
                    {historyLoading === false && (history.map((item) => (
                        <HistoryItem history={item}/>
                    )))}
                </div>
            </section>
        );
};


History.propTypes = {
    cart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, {getHistory})(History);
