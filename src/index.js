import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root'

import store from './store/store'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( 
    <Root store={store} />
    ,document.getElementById('root')
);

registerServiceWorker();