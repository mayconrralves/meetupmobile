import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware =  createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };