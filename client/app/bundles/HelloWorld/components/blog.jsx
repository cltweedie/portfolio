import PropTypes from 'prop-types';
import React from 'react';

class Blog extends React.Component {
  render() {
    let style = {
      marginTop: '50px'
    };
    return (
      <div className="container" style={ style }>
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec suscipit nisi, eget sollicitudin nibh. Nunc pellentesque venenatis est ut elementum.</p>
        { this.blogPosts() }
      </div>
    )
  };

  blogPosts = () => {
    return (
      this.props.posts.map((post) =>
        <article key={ post.id }>
          <h2>{ post.title }</h2>
          <p>{ post.body }</p>
        </article>
      )
    )
  }
}

export default Blog;