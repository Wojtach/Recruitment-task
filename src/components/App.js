import React, { Component } from 'react';
import User from './User';
import '../styles/App.css';
import spinner from '../spinners/spinner.gif';
import PropTypes from 'prop-types';


class App extends Component {



  render() {
    let listUsers;
    if (this.props.isLoading) {
      listUsers = <div id='spinner' >
        <img src={spinner} alt="Loading" />
      </div>
    } else {
      listUsers = this.props.users.map(user => {
        if (user.id > 8) {
          return null;
        } else {
          return <User key={user.id} user={user} />
        }
      })
    }
    return (
      <div className="app">
        {listUsers}
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array,
  isLoading: PropTypes.bool,
}


export default App;
