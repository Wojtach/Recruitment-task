import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchComments } from '../actions/actions';
import PostDetail from '../components/PostDetail';
import PropTypes from 'prop-types';


class PostDetailContainer extends Component {

    state = {
        areCommentsVisible: false,
    }
    componentDidMount() {
        this.props.fetchComments(this.props.match.params.postId);
    }

    handleToggleComments = () => {
        this.setState({
            areCommentsVisible: !this.state.areCommentsVisible
        })
    }

    handleDeletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'DELETE'
            })
    }


    render() {
        return (
            <PostDetail
                comments={this.props.comments}
                isLoading={this.props.isLoading}
                match={this.props.match}
                toggleComments={this.handleToggleComments}
                areCommentsVisible={this.state.areCommentsVisible}
                postsList={this.props.posts} //
                handleDeletePost={this.handleDeletePost}
                handleModalView={this.handleModalView} //
            />
        );
    }
}

PostDetailContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    fetchComments: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    comments: state.comments.data,
    isLoading: state.comments.isLoading,
    posts: state.posts.data
});

export default connect(mapStateToProps, { fetchComments })(PostDetailContainer);