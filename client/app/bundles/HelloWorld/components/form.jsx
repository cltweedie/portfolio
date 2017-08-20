import PropTypes from 'prop-types';
import React from 'react';

const Form = props => {
	return (
		<form>
			<div className="form-group">
				<input onChange={ props.handleTextChange } className="form-control" type="text" placeholder="test" />
			</div>
		</form>
	)
}

export default Form;