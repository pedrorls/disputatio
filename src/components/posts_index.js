import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <div key={ post.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { post.title }
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                            { post.categories }
                        </h6>
                        <p className="card-content">
                            { post.content }
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary-outline" to='/post/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <div>
                    { this.renderPosts() }
                </div>
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        posts: state.posts,
    };
}

export default connect(MapStateToProps, { fetchPosts })(PostsIndex);