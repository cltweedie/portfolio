import PropTypes from 'prop-types';
import React from 'react';

class About extends React.Component {
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
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec suscipit nisi, eget sollicitudin nibh. Nunc pellentesque venenatis est ut elementum.</p>
      </div>
    )
  };
}

export default About;