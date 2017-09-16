var should = require('should');
 
describe('Robot', function(){
  var robot = require('../robot');
 
it('should say Good morning when someone say Hi between 0:00 - 12:00', function(done){
    var dt = new Date(2013, 11, 26, 0, 0, 0);
    robot.sayHi(dt).should.equal('Good morning');
    done();
  });
});
