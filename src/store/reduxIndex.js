import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware ,compose} from 'redux';

import {oneFun} from './reducer/one';
import {counterReducer} from './reducer/counter'

const allReducers = combineReducers({counterReducer, oneFun });


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const newStore = createStore(allReducers, composeEnhancers(applyMiddleware(...middleware)));