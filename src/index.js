import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/shared/Layout';
import registerServiceWorker from './configs/registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
