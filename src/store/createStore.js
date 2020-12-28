import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (reducers, middlewares)=>{
	return createStore(reducers, composeWithDevTools(
		applyMiddleware(...middlewares),
		));
}