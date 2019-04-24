import React from 'react';
import '../styles/User.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const User = (props) => {
    const { name, email, phone, website, company, id } = props.user;
    return (
        <div className='user'>
            <p><strong>{name}</strong></p>
            <div className='link'>
                {email}<br />
                {phone}<br />
                {website}
            </div>
            {company.name}<br />
            {company.catchPhrase}<br />
            {company.bs}

            <Link to={`user/${id}`}><button>Details</button></Link>
        </div>
    );
}

User.propTypes = {
    user: PropTypes.object
}

export default User;