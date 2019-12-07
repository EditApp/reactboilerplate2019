/// NEW STORE 
import { combineReducers } from 'redux'
import films from './movies_reducer'

//exporting rootreduces that use combineReducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;
/// NEW  STORE 