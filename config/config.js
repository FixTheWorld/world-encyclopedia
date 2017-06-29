const path=require('path');
const config = {
    env:process.env.NODE_ENV||'development',
    api:"http://localhost:612",
    port:612,
    devScriptName:"devServer",
    leanAppId:"go9hIfTYkpNgwuifq0w73TKR-MdYXbMMI",
    leanAppKey:"hxF39RTqrdliK0ADvdDCMVf8",
    leanRegion:"us",
    leanTable:"world"//默认world表
};
module.exports=config;
