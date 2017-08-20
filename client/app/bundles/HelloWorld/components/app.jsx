import PropTypes from 'prop-types';
import React from 'react';
import SideNav from './side_nav';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Blog from './blog';
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
            <Route path="/home" render={ HomePage } />
            <Route path="/about" component={ About }/>
            <Route path="/portfolio" component={ Portfolio }/>
            <Route path="/blog" render={ BlogPage }/>
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

export default App;