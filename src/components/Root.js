import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import PostsContainer from '../containers/PostsContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import AddPostContainer from '../containers/AddPostContainer';
import AddCommentContainer from '../containers/AddCommentContainer';
import ErrorPage from '../components/ErrorPage';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={AppContainer} />
                <Route
                    exact
                    path="/user/:id/addPost"
                    component={AddPostContainer} />
                <Route
                    exact
                    path="/user/:id/:postId/addComment"
                    component={AddCommentContainer} />
                <Route
                    exact
                    path="/user/:id/:postId"
                    component={PostDetailContainer} />
                <Route
                    exact
                    path="/user/:id"
                    component={PostsContainer} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    </Provider>
)

export default Root;