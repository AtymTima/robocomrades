import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
