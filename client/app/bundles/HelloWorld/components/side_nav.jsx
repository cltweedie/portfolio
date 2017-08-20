import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

class SideNav extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav flex-column">
				  <li className="nav-item">
				  	<Link to="/home" className="nav-link active">Home</Link>
				  </li>
				  <li className="nav-item">
				    <Link to="/about" className="nav-link active">About</Link>
				  </li>
				  <li className="nav-item">
				    <Link to="/portfolio" className="nav-link active">Portfolio</Link>
				  </li>
				  <li className="nav-item">
				    <Link to="/blog" className="nav-link active">Blog</Link>
				  </li>
				  <li className="nav-item">
				    <Link to="/cv" className="nav-link active">CV</Link>
				  </li>
				</ul>
			</div>
		)
	}
}

export default SideNav;