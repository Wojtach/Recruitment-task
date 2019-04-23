import React, { Component } from 'react';
import spinner from '../spinners/spinner.gif';
import Comment from './Comment';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../styles/Comments.css';
import PropTypes from 'prop-types';


class PostDetail extends Component {

    render() {
        let listComments;
        //this.props.isLoading
        if (this.props.isLoading) {
            listComments = <div id='spinner' >
                <img src={spinner} alt="Loading" />
            </div>
        }
        else {
            // this.props
            listComments = this.props.comments.map(comment => <Comment
                key={comment.id}
                comment={comment} />)
        }

        const post = this.props.postsList.find(post => post.id === parseInt(this.props.match.params.postId));
        return (
            <>
                <Header match={this.props.match} />
                <h1><strong>{post.title}</strong></h1>
                <div>{post.body}</div>
                <button onClick={this.props.toggleComments}>{this.props.areCommentsVisible ? 'Hide comments' : 'Show comments'}</button>
                <Link to={this.props.match.url + '/addComment'}><button>Add comment</button></Link>
                <Link to={`/user/${post.userId}`}><button onClick={() => this.props.handleDeletePost(post.id)}>Delete post</button></Link>
                {this.props.areCommentsVisible ? <div>{listComments}</div> : null}

            </>
        );
    }
}

PostDetail.propTypes = {
    comments: PropTypes.array.isRequired,
    postsList: PropTypes.array.isRequired,
    toggleComments: PropTypes.func.isRequired,
    areCommentsVisible: PropTypes.bool.isRequired,
    handleModalView: PropTypes.func.isRequired
}

export default PostDetail;