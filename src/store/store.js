import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
 const Storex = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  }),
 composeWithDevTools(applyMiddleware(thunk)),

)
return Storex;
}
