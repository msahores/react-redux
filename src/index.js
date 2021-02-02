import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counterReducer from './store/reducers/counter';
import listReducer from './store/reducers/list';
import { loadState, saveState } from './localStorage';
import App from './App';
import throttle from 'lodash/throttle';

const rootReducer = combineReducers({
  ctr: counterReducer, 
  lst: listReducer
})

const logger = store => next => action => {
  console.log('[MiddleWare] Store Before Reducer', store.getState());
  console.log('[Middleware] Dispatching following action: ', action)
  const result = next(action);
  console.log('[Middleware] Store After Reducer: ', store.getState());
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedData = loadState();

//todo: fetch some data using thunks
const store = createStore(rootReducer, persistedData, composeEnhancers(applyMiddleware(logger, thunk)));

store.subscribe(throttle(()=> {
  // saveState(store.getState()) // to save the sull store

  //to save some specifics:
  saveState({
    lst: store.getState().lst
  })
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);