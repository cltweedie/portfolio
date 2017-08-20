import PropTypes from 'prop-types';
import React from 'react';
import Form from './form';
import SideNav from './side_nav';
import Message from './message';
import Home from './home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="row" style={{ height: '100%' }}>
        <div className="col-md-2">
          <h1>Welcome</h1>
          <SideNav />
        </div>
        <div className="col-md-10">
          <Home heading="Chris Tweedie" subheading="Web Developer" />
        </div>
      </div>
    )
  };
}

export default App;