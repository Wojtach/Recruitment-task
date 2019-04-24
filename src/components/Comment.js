import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    const { name, body, email } = props.comment;
    return (
        <>
            <div className='comment'>
                <strong style={{ padding: 5 }}>{name}</strong>
                <span id='useremail'>{email}</span>
                <span id='textcomment'>{body}</span>
            </div>
        </>
    );
}

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;