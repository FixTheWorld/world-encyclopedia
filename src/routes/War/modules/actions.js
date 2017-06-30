/**
 * Created by changjin.zhang on 4/19/2017.
 */
import * as t from './actionTypes';
import config from '../../../../config/config';
import {browserHistory} from 'react-router';

function doAction(type,actionName){
    return {
        type,
        actionName
    }
}

function handleData(type,json){
    return {
        type,
        json
    }
}

function needLogin(){
    return (dispatch,getState)=>{
        const isLogin=window.localStorage.getItem('auth');
        if(!isLogin){
            browserHistory.push('/login');
            return false;
        }
        return true;
    }
}

function getCompanies(callback){
    return (dispatch,getState)=>{
        let settings={
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            mode:"cors"
        }
        return fetch(config.spProductBase+'/getCompanies',settings)
            .then((response)=>response.json())
            .then((json)=>{
                let {company}=json;
                let newJson={
                    company:company?company:[]
                }
                dispatch(handleData(t.DATA_COMPANIES,newJson));
                callback&&callback();
            }
        );
    }
}

export {needLogin,getCompanies};