import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong> 
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4">React Blog</h1>
        <hr className="white-line my-2"/>
        <h3 className="italic">Your posts</h3>
        <ul className="list-group italic">
          {this.renderPosts()}
        </ul>
        <div className="new-link">
          <Link to="/posts/new">
            Add a new post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);