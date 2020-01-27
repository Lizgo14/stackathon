import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument(getFirebase),
    loggingMiddleware
  ))
)
