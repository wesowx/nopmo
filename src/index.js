import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { changeSigninState, changeRegisterState, loadUserState, changeRoute, loadStreak, loadPastStreakList, streakMode} from './reducers.js';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Tachyons from 'tachyons';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({changeSigninState,changeRegisterState,loadUserState,changeRoute,loadStreak, loadPastStreakList, streakMode});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
