import { combineReducers } from 'redux'

// importing all the reducers here

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import tableOfFiveReducer from './tableOfFive/tableOfFiveReducer'


const rootReducer = combineReducers({
    cake:cakeReducer, 
    iceCream : iceCreamReducer,
    table : tableOfFiveReducer
});

export default rootReducer;