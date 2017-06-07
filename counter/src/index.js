import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers.js';

const initialState = {
	value: 42
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
);
registerServiceWorker();
