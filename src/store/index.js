import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import { set_data, initialState } from '../reducers'

const makeStore = () => {
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose

  return createStore(
    set_data,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default createWrapper(makeStore, {debug: true})
