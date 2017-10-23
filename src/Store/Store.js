//import redux dependencies
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
//import Reducers here

export let initStore = () => {
  const history = createHistory()
  const historyWare = routerMiddleware(history)
  // const reducer = combineReducers({
  //     //instert all reducers here
  // });
  const store = createStore ( compose (applyMiddleware(thunk, historyWare),
  window.devToolsExtension()
  )
)
return [store,history];
}
