import PropTypes from 'prop-types';
import React from 'react';
import SideNav from './side_nav';
import { Home, HomePage } from './home';
import About from './about';
import { Portfolio, PortfolioPage } from './portfolio';
import { Blog, BlogPage } from './blog';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { RouteTransition, presets } from 'react-router-transition';
import TRANSITION from '../constants/transition';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    let sidebarStyle = {
      backgroundColor: '#eee',
      height: '100%',
      zIndex: 999
    };

    return (
      <Router>      
        <div className="row" style={{ height: '100%' }}>
          <div className="col-md-2" style={ sidebarStyle }>
            <h1 style={{ marginTop: '20px' }}>Testing</h1>
            <SideNav />
          </div>
          <div className="col-md-10" style={{ padding: 0, overflow: 'hidden' }}>
            <Route exact path="/home" render={ HomePage } />
            <Route render={({location, history, match}) => {
              return (
                <RouteTransition 
                  pathname={ location.pathname }
                  {...TRANSITION}
                >
                  <Switch key={ location.key } location={ location }>
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/portfolio" render={ PortfolioPage } />
                    <Route exact path="/blog" render={ BlogPage } />
                  </Switch>
                </RouteTransition>
              );
            }} />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;