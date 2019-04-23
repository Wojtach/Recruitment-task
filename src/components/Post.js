import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Post = (props) => {
    const { id, title } = props.post;
    return (
        <Link to={`${props.match.url}/${id}`}>
            <div className='post'>
                <span id='title'>{title}</span>
                <button id='postbtn'></button>
            </div>
        </Link>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}

export default Post;