import React, { Component } from 'react';
import spinner from '../spinners/spinner.gif';
import Post from './Post';
import Header from './Header';
import '../styles/Posts.css';
import PropTypes from 'prop-types';


class Posts extends Component {

    render() {
        let userPosts;
        if (this.props.isLoading) {
            userPosts = <div id='spinner' >
                <img src={spinner} alt="Loading" />
            </div>
        }
        else {
            //this.props na dole
            userPosts = this.props.posts.map(post => <Post key={post.id} post={post} match={this.props.match} />)
        }

        return (
            <div className="posts">
                <Header match={this.props.match} addButton={true} />
                {userPosts}

            </div>
        );
    }
}
Posts.propType = {
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
}

export default Posts;