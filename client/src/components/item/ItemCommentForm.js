import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addComment} from '../../actions/item'


const ItemCommentForm = ({addComment, id, auth: {user: {_id}}, item: {item}}) => {
    const [formData, setFormData] = useState({
        text: '',
        rating: 0
    });
    
    let commentText = '';
    let commentRating = 0;
    let answer = false

    const checkComment = (user_id) => {
        item.comments.map((comment) => {
            if(user_id.toString() === comment.user.toString()){
                commentText = comment.text;
                commentRating = comment.rating;
                answer = true;
                return;
            }
        })
        return answer
    }

    useEffect(() => {
        if(checkComment(id) === true){
            setFormData({...formData, text: commentText, rating: commentRating})
        }
    },[])

    const {text, rating} = formData;

    const onClick = (num) => {
        setFormData({rating: num});

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

    return (
        <div>
            {checkComment(_id) === true? (
                <div>
                    <h1>Works</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addComment(id, formData);
                    }}>
                        <input placeholder='Add a comment' type='text' name='text' value={text} onChange={onChange}/>
                        <div className="ratings-wrapper">
                        <div data-productid={id} className="ratings">
                                <span style={changeStar(5)} onClick={() => onClick(5)}>★</span>
                                <span style={changeStar(4)} onClick={() => onClick(4)}>★</span>
                                <span style={changeStar(3)} onClick={() => onClick(3)}>★</span>
                                <span style={changeStar(2)} onClick={() => onClick(2)}>★</span>
                                <span style={changeStar(1)} onClick={() => onClick(1)}>★</span>
                            </div>
                        </div>
                        <input type="submit" value='Submit'/>
                    </form>
                </div>
            ):(
                <div>
                    <h1>dosen't</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addComment(id, formData);
                    }}>
                        <input placeholder='Add a comment' type='text' name='text' value={text} onChange={onChange}/>
                        <div className="ratings-wrapper">
                        <div data-productid={id} className="ratings">
                                <span style={changeStar(5)} onClick={() => onClick(5)}>★</span>
                                <span style={changeStar(4)} onClick={() => onClick(4)}>★</span>
                                <span style={changeStar(3)} onClick={() => onClick(3)}>★</span>
                                <span style={changeStar(2)} onClick={() => onClick(2)}>★</span>
                                <span style={changeStar(1)} onClick={() => onClick(1)}>★</span>
                            </div>
                        </div>
                        <input type="submit" value='Submit'/>
                    </form>
                </div>
            )}
        </div>
    );
};


ItemCommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, {addComment})(ItemCommentForm);
