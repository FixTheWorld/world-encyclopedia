/**
 * Created by changjin.zhang on 4/19/2017.
 */
import * as t from './actionTypes';
import {combineReducers} from 'redux';
function ui(state={needLogin:1},action){
    //默认action为空，因此会返回默认的状态
    switch (action.type){
        case t.NEED_LOGIN_LOGIN:
        return Object.assign({}, state, {
            needLogin:1
        });
        case t.SKIP_LOGIN:
        return Object.assign({},state,{
            needLogin:0
        })
        default: return state;
    }
}

function data(state={company:[]},action){
    switch (action.type){
        case t.DATA_COMPANIES:
        return Object.assign({}, state, {
            company:action.json.company
        });
        default: return state;
    }
}

export default combineReducers({ui,data});