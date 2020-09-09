import {createStore} from 'redux'
import reducer from './reducer'
<<<<<<< HEAD

const store = createStore(reducer)

export default store
=======
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// mount it on the Store
const store = createStore(
    reducer,
    enhancer
);

// then run the saga
sagaMiddleware.run(todoSagas)

export default store;
>>>>>>> 6d076b98fc7bd531e2918e79975fcf0fccd17768
