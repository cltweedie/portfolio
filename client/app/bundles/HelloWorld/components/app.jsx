import PropTypes from 'prop-types';
import React from 'react';
import Form from './form';
import SideNav from './side_nav';
import Message from './message';
import Home from './home';
import About from './about';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    let sidebarStyle = {
      backgroundColor: '#eee',
      height: '100%'
    };

    return (
      <Router>
        <div className="row" style={{ height: '100%' }}>
          <div className="col-md-2" style={ sidebarStyle }>
            <h1>Welcome</h1>
            <SideNav />
          </div>
          <div className="col-md-10">
            <Route path="/home" render={HomePage} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    )
  };
}

const HomePage = props => {
  return (
    <Home heading="Chris Tweedie" subheading="Web Developer" />
  )
}

export default App;