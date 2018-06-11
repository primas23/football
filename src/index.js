import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './configs/registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Layout from './components/shared/Layout';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();