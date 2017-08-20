import PropTypes from 'prop-types';
import React from 'react';

class SideNav extends React.Component {
	render() {
		var style = {
      backgroundColor: '#eee',
      height: '100%'
    };
    
		return (
			<div>
				<ul className="nav flex-column">
				  <li className="nav-item">
				    <a className="nav-link active" href="#">Home</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="#">About</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="#">Portfolio</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="#">Blog</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="#">CV</a>
				  </li>
				</ul>
			</div>
		)
	}
}

export default SideNav;