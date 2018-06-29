import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { addComment } from './actions/actions'

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));
