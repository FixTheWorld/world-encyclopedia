/**
 * Created by changjin.zhang on 6/19/2017.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import makeRootReducer from './mainReducer';
const middleWare=[thunk,createLogger()];
const store=createStore(makeRootReducer(),{},compose(applyMiddleware(...middleWare)));
store.asyncReducers = {};
store.replaceReducer(makeRootReducer(store.asyncReducers));
export default store;
