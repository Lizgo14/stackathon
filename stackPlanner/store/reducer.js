import {planReducer} from './reducer'
import {combineReducers} from 'redux'



const rootReducer = combineReducers({
  plans: planReducer
  })

export default rootReducer