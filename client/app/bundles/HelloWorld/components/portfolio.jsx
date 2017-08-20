import PropTypes from 'prop-types';
import React from 'react';

class Portfolio extends React.Component {
  render() {
    let style = {
      marginTop: '50px'
    };
    console.log(this.props.projects);
    return (
      <div className="container" style={ style }>
        <h1>Portfolio</h1>
        <p>Morbi imperdiet erat id mollis varius. Nulla massa quam, feugiat a neque id, pharetra posuere mauris.</p>
        <p>Integer eget massa quis libero dictum semper.</p>
        { this.projects() }
      </div>
    )
  };

  projects = () => {
    console.log(this.props.projects);
    return this.props.projects.map((project) =>
      <div key={ project.id }>
        <h2>{ project.title }</h2>
        <img src={ project.image } alt={ project.title } />
        <p>{ project.description }</p>
      </div>
    )
  }
}

const PROJECTS = [
  {
    id: 1,
    title: 'Jonathan Tait Films',
    image: 'http://placehold.it/600x400',
    description: 'Integer ligula orci, tristique et placerat a, condimentum id elit. Donec in metus felis.'
  },
  {
    id: 2,
    title: 'Upbeat',
    image: 'http://placehold.it/600x400',
    description: 'My final project after completing the course at WeGotCoders.'
  }
]

const PortfolioPage = props => {
  return (
    <Portfolio projects={ PROJECTS } />
  )
}

export { Portfolio, PortfolioPage };