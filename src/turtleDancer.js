var TurtleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._left = left;
  this.$node = $('<span class="turtleDancer"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = makeDancer.step;
};
TurtleDancer.prototype = Object.create(Dancer.prototype);
TurtleDancer.prototype.constructor = TurtleDancer;
TurtleDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this._left = this._left-3;
  this.$node.css({left: this._left});
};