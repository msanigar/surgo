import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/reset.scss';
import './index.scss';
import App from './Containers/App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
