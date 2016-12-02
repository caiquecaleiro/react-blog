import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => this.context.router.push('/'));
  }

  render() {
    const { post } = this.props;
    
    if (!post) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <div className="jumbotron">
          <h4 className="display-4">{post.title}</h4>
          <p className="lead">{post.content}</p>
          <hr className="my-2"/>
          <Link to="/" className="btn btn-primary">Back</Link>
          <button className="btn btn-danger margin-left-5px" 
            onClick={this.onDeleteClick.bind(this)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);