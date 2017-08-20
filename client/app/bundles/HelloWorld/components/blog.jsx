import PropTypes from 'prop-types';
import React from 'react';

class Blog extends React.Component {
  render() {
    let style = {
      marginTop: '50px'
    };
    console.log(this.props.posts);
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

const POSTS = [
  {
    id: 1,
    title: 'First Post',
    body: 'Morbi neque diam, mollis et arcu ac, sodales vulputate magna. Vestibulum sodales dui at enim interdum'
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'Proin vestibulum tristique ligula, eu facilisis nibh rhoncus eget. Orci varius natoque penatibus et magnis dis parturient montes'
  }
]

const BlogPage = props => {
  return (
    <Blog posts={ POSTS } />
  )
}

export { Blog, BlogPage };