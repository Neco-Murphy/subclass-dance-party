var TurtleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var locT = this.$node.css("top");
  var locL = this.$node.css("left");
  console.log(locT , locL);
  this.$node = $('<img class="turtleDancer" src="turtle.jpg" height ="100">');
  this.$node.css({top: locT, left: locL});
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = makeDancer.step;
};
TurtleDancer.prototype = Object.create(Dancer.prototype);
TurtleDancer.prototype.constructor = TurtleDancer;
TurtleDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  if(this.dancing){
    var x = this.$node.css('left').slice(0, -2);
    var y = this.$node.css('top').slice(0, -2);
    // debugger;
    x -= 3;
    this.setPosition(y, x);
  }

};

// <span class="turtleDancer"></span>
