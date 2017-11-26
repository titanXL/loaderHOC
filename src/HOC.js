import React from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Loader = props => {
	const { Component, loaded, ...restProps } = props;
	return (
		<div>
			{
				{
					false: <div>LOADING + glezotiiki</div>,
					true: <Component {...restProps} />
				}[loaded]
			}
		</div>
	);
};
Loader.propTypes = {
	Component: PropTypes.func.isRequired
};

const mapStateToProps = () => {
	return (state, props) => ({
		loaded: state.loaded,
		name: state.name
	});
};

const Hoc = compose(
	withProps(props => ({
		name: props.name
	})),
	connect(mapStateToProps)
)(Loader);

export default () => Component => props =>
	<Hoc Component={Component} {...props} />;
