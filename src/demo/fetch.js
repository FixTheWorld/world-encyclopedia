/**
 * Created by changjin.zhang on 6/29/2017.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
const url="https://us.leancloud.cn:443/1.1/classes/world";
const settings={
    method:"GET",
    headers:{
        'Content-Type': 'application/json',
        'X-LC-Id':"go9hIfTYkpNgwuifq0w73TKR-MdYXbMMI",
        'X-LC-Key':"hxF39RTqrdliK0ADvdDCMVf8",
    }
};
fetch(url,settings).then((res)=>{
    console.log('res',res);
    return res.json()
}).then((json)=>{
    console.log('json',json);
});