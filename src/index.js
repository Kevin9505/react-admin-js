import React from 'react';
import ReactDOM from 'react-dom';
import './assets/less/index.less';
// import App from './App';
// import Home from './pages/Home/Home'
import BasicRoute from './router/router'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BasicRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
