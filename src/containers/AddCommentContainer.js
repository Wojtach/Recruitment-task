import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddContainer.css';

class AddCommentContainer extends Component {
    state = {
        name: '',
        body: '',
        email: '',

        errors: {
            name: false,
            body: false,
            email: false
        }
    }

    messages = {
        name_incorrect: 'name length must be in 3-70 characters',
        body_incorrect: 'Body length must be in 10-300 characters',
        email_incorrect: 'Incorrect e-mail'
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }



    handleSubmit = e => {
        e.preventDefault();
        const validation = this.formValidation();
        console.log(validation);
        if (validation.correct) {
            this.setState({
                name: '',
                body: '',
                email: '',

                errors: {
                    name: false,
                    body: false,
                    email: false
                }
            })
            this.handlePostSending();
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    body: !validation.body,
                    email: !validation.email
                }
            })
        }
    }

    handlePostSending = () => {
        // POST adds a random id to the object sent
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                body: this.state.body,
                postId: this.postId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error('Sending form - error')
            })
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    formValidation = () => {
        let name = false;
        let body = false;
        let email = false;
        let correct = false;

        if (this.state.name.length >= 3 && this.state.name.length <= 70) {
            name = true;
        }
        if (this.state.body.length >= 10 && this.state.body.length <= 300) {
            body = true;
        }
        if (this.state.email.indexOf('@') !== -1 && this.state.email.indexOf(' ') === -1) {
            email = true
        }
        if (name && body && email) {
            correct = true
        }
        return ({
            name,
            body,
            email,
            correct
        })
    }

    userId = this.props.match.params.id;
    postId = this.props.match.params.postId;

    render() {
        return (
            <div className='funkyContainer'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <h1>Add Comment</h1><hr />
                    <label>Name
                    <input type="text" onChange={this.handleChange} value={this.state.name} name='name' />
                        {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
                    </label><br /><br />
                    <label>E-mail
                    <input type="text" onChange={this.handleChange} value={this.state.email} name='email' />
                        {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    </label><br /><br />
                    <label>Body
                    <textarea onChange={this.handleChange} type="text" value={this.state.body} name='body' />
                        {this.state.errors.body && <span>{this.messages.body_incorrect}</span>}
                    </label><br />
                    <button >Save</button>
                    <Link to={`/user/${this.userId}/${this.postId}`}><button>Cancel</button></Link>
                </form>
            </div>
        );
    }
}

export default AddCommentContainer;