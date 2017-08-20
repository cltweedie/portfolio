import PropTypes from 'prop-types';
import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    let style = {
      marginTop: '50px'
    };
    return (
      <div className="container" style={ style }>
        <h1>Portfolio</h1>
        <p>Morbi imperdiet erat id mollis varius. Nulla massa quam, feugiat a neque id, pharetra posuere mauris.</p>
        <p>Integer eget massa quis libero dictum semper.</p>
      </div>
    )
  };
}

export default Portfolio;