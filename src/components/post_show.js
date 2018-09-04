import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSinglePost, deletePost } from '../actions/index';

class PostShow extends Component {
    componentDidMount(){
        if(!this.props.post) {
            const { id } = this.props.match.params; 
            this.props.fetchSinglePost(id);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading ...</div>
        }

        return(
            <div className="container">
                <Link to="/" className="btn btn-info-outline">
                    <i className="fa fs-back-arrow"></i>Back to Home
                </Link>
                <button
                    className="btn btn-danger-outline pull-xs-right"
                    onClick={ this.onDeleteClick.bind(this) }
                >Delete Post</button>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps, { fetchSinglePost, deletePost }
)(PostShow);