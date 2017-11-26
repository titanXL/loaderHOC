import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = {
	loading: true,
	loaded: false,
	name: 'ZEUS'
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				loaded: false,
				name: 'ZEUS'
			};
		case 'LOADED':
			return {
				loading: false,
				loaded: true,
				name: 'ZEUS'
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

setTimeout(() => {
	store.dispatch({ type: 'LOADING' });
}, 3000);

setTimeout(() => {
	store.dispatch({ type: 'LOADED' });
}, 5000);

ReactDOM.render(
	<Provider store={store}>
		<Login />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
