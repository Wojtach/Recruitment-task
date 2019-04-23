import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/actions';
import App from '../components/App';
import PropTypes from 'prop-types';



class AppContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <App
                users={this.props.users}
                isLoading={this.props.isLoading} />
        );
    }
}

App.propTypes = {
    users: PropTypes.array,
    isLoading: PropTypes.bool,
    fetchUsers: PropTypes.func
}

const mapStateToProps = state => ({
    users: state.users.data,
    isLoading: state.users.isLoading,
});

export default connect(mapStateToProps, { fetchUsers })(AppContainer);