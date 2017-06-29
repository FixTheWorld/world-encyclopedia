/**
 * Created by changjin.zhang on 6/29/2017.
 */
var APP_ID = 'go9hIfTYkpNgwuifq0w73TKR-MdYXbMMI';
var APP_KEY = 'hxF39RTqrdliK0ADvdDCMVf8';
var AV = require('leancloud-storage');

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    region: 'us'
});
var TestObject = new AV.Query('world');
var testObject =TestObject;
testObject.find({name:"111!"}).then(function(comments) {
    console.log(JSON.stringify(comments));
});