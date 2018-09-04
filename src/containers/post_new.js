import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';

class PostNew extends Component{
    renderField(field){
        const { touched, error } = field.meta;
        const className = `form-group ${ touched && error ? 'has-danger': '' }`;

        return(
            <div className={ className }>
                <label>{ field.label }</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder={ field.placeholder }
                    { ...field.input }
                />
                <div className="text-help">
                    { touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
            <h3>New Post</h3>
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    placeholder="My new post title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Categories"
                    placeholder="Dev, General, React, Jobs"
                    name="categories"
                    component={ this.renderField }
                />
                <Field
                    label="Content"
                    placeholder="What do you want to say?"
                    name="content"
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary-outline">
                    Send  <i className="far fa-paper-plane"></i>
                </button>
                <Link to='/' className='btn btn-danger-outline'>
                    Cancel  <i className="fas fa-ban"></i>
                </Link>
            </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a title!';
    }

    if(!values.categories){
        errors.categories = 'Enter some categories!';
    }

    if(!values.content){
        errors.content= 'The post need some content with at least 30 characters';
    }

    return errors;
}

export default reduxForm({ 
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
);