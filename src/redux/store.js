import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/reducer';

const rootReducer = combineReducers({ user: userReducer });

export const store = createStore(rootReducer);