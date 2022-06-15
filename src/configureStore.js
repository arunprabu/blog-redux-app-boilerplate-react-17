import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension' 
// If you use react-router, don't forget to pass in your history type.
import { createRootReducer, rootSaga } from './store'

// Let's configue the store/ 
// store configuration can have initialState and has to return store.
export default function configureStore(history, initialState) {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga)
  return store;
}
