var moment = require('moment');

//var date = new Date();
//var months = ['Jan'.'Feb']
//console.log(date.getMonth());
var someTimestamp = moment().valueOf();
console.log(someTimestamp)
var createdAt = 1234;
var date = moment(createdAt);
//data.add(100,'years').subtract(9,'months')

console.log(date.format('h:mm a'));
