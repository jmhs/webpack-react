//import redux dependencies
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import DummyReducer from "../Reducers/DummyReducer.js"

export const initStore = () => {
  const history = createHistory()
  const historyWare = routerMiddleware(history)
  const reducer = combineReducers({
      DummyReducer: DummyReducer
  });
  const store = createStore (reducer, compose(applyMiddleware(thunk, historyWare),
  window.devToolsExtension()
  )
)
return [store , history];
}
