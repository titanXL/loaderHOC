import React from 'react';
import Loader from './HOC';
import { compose } from 'recompose';

const Login = props => {
	return (
		<div>
			LOADED {props.name}
		</div>
	);
};

export default compose(Loader())(Login);
