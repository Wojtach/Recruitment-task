import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddContainer.css';

class AddPostContainer extends Component {
    state = {
        title: '',
        body: '',

        errors: {
            title: false,
            body: false
        }
    }

    messages = {
        title_incorrect: 'Title length must be in 3-70 characters',
        body_incorrect: 'Body length must be in 10-300 characters'
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handlePostSending = () => {
        // POST adds a random id to the object sent
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: this.id
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

    handleSubmit = e => {
        e.preventDefault();
        const validation = this.formValidation();
        if (validation.correct) {
            this.setState({
                title: '',
                body: '',

                errors: {
                    title: false,
                    body: false
                }
            })
            this.handlePostSending();
        } else {
            this.setState({
                errors: {
                    title: !validation.title,
                    body: !validation.body
                }
            })
        }
    }

    formValidation = () => {
        let title = false;
        let body = false;
        let correct = false;

        if (this.state.title.length >= 3 && this.state.title.length <= 70) {
            title = true;
        }
        if (this.state.body.length >= 10 && this.state.body.length <= 300) {
            body = true;
        }
        if (title && body) {
            correct = true
        }
        return ({
            title,
            body,
            correct
        })
    }

    id = this.props.match.params.id;

    render() {
        return (
            <div className='funkyContainer'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <h1>Add Post</h1><hr />
                    <label>Title
                    <input type="text" onChange={this.handleChange} value={this.state.title} name='title' />
                        {this.state.errors.title && <span>{this.messages.title_incorrect}</span>}
                    </label><br /><br />
                    <label>Body
                    <textarea onChange={this.handleChange} type="text" value={this.state.body} name='body' />
                        {this.state.errors.body && <span>{this.messages.body_incorrect}</span>}
                    </label><br />
                    <button >Save</button>
                    <Link to={`/user/${this.id}`}><button>Cancel</button></Link>
                </form>
            </div>
        );
    }
}

export default AddPostContainer;