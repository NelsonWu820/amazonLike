import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment, deleteComment} from '../../actions/item'
import { setAlert } from '../../actions/alert';

const ItemCommentForm = ({setAlert, addComment, deleteComment, id, auth: {user: {_id, avatar}}, item: {item}}) => {
    const [formData, setFormData] = useState({
        text: '',
        rating: 0
    });

    const {text, rating} = formData;

    //used to rerender state when adding or deleteing comment
    const[check, setCheck] = useState(false)
    let answer = false;
    
    //if the have a commment already fill in the state and don't let them edit it only delete
    const checkComment = (user_id) => {
        console.log(item.comments.length);
        answer = false;
        if(item.comments.length === 0) {
            return answer;
        };
        item.comments.map((comment) => {
            if(user_id.toString() === comment.user.toString()){
                setFormData({...formData, text: comment.text, rating: comment.rating})
                setCheck(true)
                answer = true;
                return answer;
            }
        })
        setCheck(answer);
        return answer;
    }

    useEffect(() => {
        checkComment(_id);
    },[id])

    const onClick = (num) => {
        setFormData({...formData, rating: num});

    }

    const changeStar = (num) => {
        if(rating === 0){
            return  {color: 'none'}
        }
        else if(rating >= num){
            return {color: 'orange'}
        }
        else{
            return  {color: 'black'}
        }
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    let comment_id = '';
    const deleteCommentById = (user_id) => {
        item.comments.map((comment) => {
            if(user_id.toString() === comment.user.toString()){
                comment_id = comment._id;
            }
        })
        deleteComment(id, comment_id)
    }

    return (
        <div>
            {check === true? (
                <form className="commentform"> 
                    <div className="row">
                        <div className="col-2">
                            <img src={avatar} width="70" className="rounded-circle mt-2"/>
                        </div>
                        <div className="col-10">
                            <div className="comment-box ml-2">
                                <h4>Your comment</h4>
                                <div className="ratings-wrapper"> 
                                    <div className='ratings'>
                                        <span style={changeStar(5)}>★</span>
                                        <span style={changeStar(4)}>★</span>
                                        <span style={changeStar(3)}>★</span>
                                        <span style={changeStar(2)}>★</span>
                                        <span style={changeStar(1)}>★</span>
                                    </div>
                                </div>
                                <div className="comment-area">
                                    <textarea disabled={true} className="form-control" rows="4" 
                                    type='text' name='text' value={text}></textarea>
                                </div>
                                <div className="comment-btns mt-2">
                                    <div className="row">
                                        <div>
                                            <button 
                                                className="btn btn-success btn-comment"
                                                type='delete' onClick={() => {
                                                deleteCommentById(_id);
                                                setFormData({ text: '', rating: 0});
                                                setCheck(false);
                                            }}>
                                                Delete
                                            </button>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </form>
            ):(
                <form className="commentform" onSubmit={(e) => {
                    e.preventDefault();
                    //this is just a front end check to see if user inputs right data for the setCheck there is a backend check as well
                    //just in case the user manages to get past front end check
                    //use regular expression to get rid of whtespaces and see if length is 0 i.e it's empty
                    if(rating !== 0 &&  text.replace(/\s/g, '').length !== 0){
                        addComment(id, formData);
                        setCheck(true);
                    }
                    //check if inbetween 1 and 5
                    if(rating <= 0 || rating >= 6){
                        setAlert('Please input a valid rating', 'danger');
                    }
                    if(text.replace(/\s/g, '').length === 0){
                        setAlert('Please input text', 'danger');
                    }
                    }}> 
                    <div className="row">
                        <div className="col-2">
                            <img src={avatar} width="70" className="rounded-circle mt-2"/>
                        </div>
                        <div className="col-10">
                            <div className="comment-box ml-2">
                                <h4>Add a comment</h4>
                                {/*fragment calls changeStar to force the rest of the span to use the updated rating i.e 0*/}
                                <Fragment style={changeStar(5)}></Fragment>
                                <div className="ratings-wrapper"> 
                                    <div className='ratings'>
                                        <span style={changeStar(5)} onClick={() => onClick(5)}>★</span>
                                        <span style={changeStar(4)} onClick={() => onClick(4)}>★</span>
                                        <span style={changeStar(3)} onClick={() => onClick(3)}>★</span>
                                        <span style={changeStar(2)} onClick={() => onClick(2)}>★</span>
                                        <span style={changeStar(1)} onClick={() => onClick(1)}>★</span>
                                    </div>
                                </div>
                                <div className="comment-area">
                                    <textarea className="form-control" placeholder="Add a comment" rows="4" 
                                    type='text' name='text' value={text} onChange={onChange}></textarea>
                                </div>
                                <div className="comment-btns mt-2">
                                    <div className="row">
                                        <div>
                                            <input type="submit" value='Submit' className="btn btn-success btn-comment"/>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};


ItemCommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getItemById: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {setAlert, addComment, deleteComment})(ItemCommentForm);
