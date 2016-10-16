// util.js - assorted utility & helper functions
var chalk = require('chalk');

// get current timestamp in HH:MM;SS format
function getTimeStamp() {
  var date = new Date(),
      hour = date.getHours(),
      min  = date.getMinutes(),
      sec  = date.getSeconds();

  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  return hour + ':' + min + ':' + sec;
}

// check if object is empty
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

// check if a string is a valid json-sring
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// get an random integer in a an interval
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

// a log function
function log(content, type) {
  if(typeof type == 'undefined') type = 'info';
  if(typeof content == 'object') content = JSON.stringify(content);
  var logc = chalk.yellow(getTimeStamp()) + ' [' + type + '] ' + content;
  console.log(logc);
}

// exports
module.exports = {
  getTimeStamp: getTimeStamp,
  isJsonString: isJsonString,
  randomInt: randomInt,
  log: log,
}