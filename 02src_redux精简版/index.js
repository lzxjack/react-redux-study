import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
