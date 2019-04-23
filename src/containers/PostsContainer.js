import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/actions';
import Posts from '../components/Posts';
import PropTypes from 'prop-types';




class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts(this.props.match.params.id);
    }

    render() {
        return (
            <Posts match={this.props.match} isLoading={this.props.isLoading} posts={this.props.posts} />
        );
    }
}

PostsContainer.propTypes = {
    posts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.data,
    isLoading: state.posts.isLoading,
});

export default connect(mapStateToProps, { fetchPosts })(PostsContainer);