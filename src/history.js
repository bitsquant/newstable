import configureStore from './store/store';
import { createBrowserHistory } from 'history' 
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore()

const history = syncHistoryWithStore(createBrowserHistory(), store)

export default history;
