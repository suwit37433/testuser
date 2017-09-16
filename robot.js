var robot = function(){
 var _sayHi = function(senderDatetime){
 var message = '';
 var loMorningDatetime = new Date(2013, 10, 21, 0, 0, 0);
 var upMorningDatetime = new Date(2014, 12, 1, 12, 0, 0);
 var loMorningTime = loMorningDatetime.getHours() + loMorningDatetime.getMinutes();
 var upMorningTime = upMorningDatetime.getHours() + upMorningDatetime.getMinutes();
 var senderTime = senderDatetime.getHours() + senderDatetime.getMinutes();
 if(senderTime >= loMorningTime && senderTime <= upMorningTime){
 message = 'Good morning';
 }
 
return message;
 }
 
return {
 sayHi: _sayHi
 }
}();
 
module.exports = robot;
