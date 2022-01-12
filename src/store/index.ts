import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

export default store