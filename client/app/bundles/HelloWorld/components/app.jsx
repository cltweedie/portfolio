import PropTypes from 'prop-types';
import React from 'react';
import SideNav from './side_nav';
import { Home, HomePage } from './home';
import About from './about';
import { Portfolio, PortfolioPage } from './portfolio';
import { Blog, BlogPage } from './blog';
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
            <h1 style={{ marginTop: '20px' }}>Welcome</h1>
            <SideNav />
          </div>
          <div className="col-md-10">
            <Route path="/home" render={ HomePage } />
            <Route path="/about" component={ About }/>
            <Route path="/portfolio" render={ PortfolioPage }/>
            <Route path="/blog" render={ BlogPage }/>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;