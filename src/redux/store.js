import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'


import rootReducer from './rootReducer'

// createStore method receives reducer as its argument
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)) );

export default store