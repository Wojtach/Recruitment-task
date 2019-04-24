import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import PropTypes from 'prop-types';



class Header extends Component {
    render() {
        let userName;
        const id = parseInt(this.props.match.params.id);
        if (this.props.users) {
            userName = this.props.users.find(user => user.id === id)
        }
        return (
            <div className='header'>
                {this.props.addButton ?
                    <Link to='/'>
                        <div id='back'>Back</div>
                    </Link> :
                    <Link to={`/user/${id}`}>
                        <div id='back'>Back</div>
                    </Link>}

                <div id='name'>{userName.name}</div>

                {this.props.addButton ? <Link to={`/user/${id}/addPost`}><div id='addbtn'>+</div></Link> : null}
            </div>
        );
    }
}

Header.propTypes = {
    users: PropTypes.array,
    match: PropTypes.object,
    addButton: PropTypes.bool
}

const mapStateToProps = state => ({
    users: state.users.data,
})

export default connect(mapStateToProps)(Header);