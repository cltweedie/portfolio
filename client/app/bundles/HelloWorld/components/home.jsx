import PropTypes from 'prop-types';
import React from 'react';

const Home = props => {
	var style = {
		textAlign: 'center',
		paddingTop: '20%',
		backgroundImage: 'url(assets/background-image-1.jpg)',
		backgroundSize: 'cover',
		color: '#fff',
		height: '100%',
		width: '100%'
	};

	return (
		<div style={ style } className="route-transition">
			<h1>{ props.heading }</h1>
			<h2>{ props.subheading }</h2>
		</div>
	)
}

const HomePage = props => {
  return (
    <Home heading="Chris Tweedie" subheading="Web Developer" />
  )
}

export { Home, HomePage };