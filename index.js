/**
 * Created by changjin.zhang on 6/12/2017.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import mainRoute from './src/routes/mainRoute';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import store from './src/store/createStore';

const routes=mainRoute(store);
render(
    <Provider store={store}>
        <Router history={browserHistory} children={routes} />
    </Provider>,
    document.querySelector("#root")
);