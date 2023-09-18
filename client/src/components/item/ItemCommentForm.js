import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment, deleteComment} from '../../actions/item'


const ItemCommentForm = ({addComment, deleteComment, id, auth: {user: {_id}}, item: {item}}) => {
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
                <div>
                    <div className="ratings-wrapper">
                        <div className="ratings">
                                <span style={changeStar(5)}>★</span>
                                <span style={changeStar(4)}>★</span>
                                <span style={changeStar(3)}>★</span>
                                <span style={changeStar(2)}>★</span>
                                <span style={changeStar(1)}>★</span>
                            </div>
                        </div>
                    <input disabled={true} placeholder='Add a comment' type='text' name='text' value={text}/>
                    <div>
                        <button type='delete' onClick={() => {
                            deleteCommentById(_id);
                            setFormData({ text: '', rating: 0});
                            setCheck(false);
                        }}>
                            Delete
                        </button>
                    </div>
                </div>
            ):(
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addComment(id, formData);
                        setCheck(true)
                        }}>
                        <div className="ratings-wrapper">
                            <div className="ratings">
                                <span style={changeStar(5)} onClick={() => onClick(5)}>★</span>
                                <span style={changeStar(4)} onClick={() => onClick(4)}>★</span>
                                <span style={changeStar(3)} onClick={() => onClick(3)}>★</span>
                                <span style={changeStar(2)} onClick={() => onClick(2)}>★</span>
                                <span style={changeStar(1)} onClick={() => onClick(1)}>★</span>
                            </div>
                        </div>
                        <input placeholder='Add a comment' type='text' name='text' value={text} onChange={onChange}/>
                        <input type="submit" value='Submit'/>
                    </form>
                </div>
            )}
        </div>
    );
};


ItemCommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getItemById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {addComment, deleteComment})(ItemCommentForm);
