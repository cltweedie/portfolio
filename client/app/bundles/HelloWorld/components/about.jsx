import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec suscipit nisi, eget sollicitudin nibh. Nunc pellentesque venenatis est ut elementum.</p>
      </div>
    )
  };
}

export default About;