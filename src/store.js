import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import profileReducer from './reducers';

export default createStore(profileReducer,applyMiddleware(logger));