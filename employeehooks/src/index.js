import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));

export default store