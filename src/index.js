

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import {  Route, BrowserRouter} from 'react-router-dom';
import App from './components/App';

const store = configureStore()

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
                <Route exact path="/" component={App} />
 
   </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);