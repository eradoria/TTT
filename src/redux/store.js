import { applyMiddleware,legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import state from './state'

export default createStore(reducers, state, applyMiddleware(thunk))