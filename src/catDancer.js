var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
    this._top = top;
    this._left = left;
    this.$node = $('<span class="catDancer"></span>');
    this.count =0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = makeDancer.step;
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;
CatDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.count++;
  (this.count % 4 === 1 || this.count % 4 === 2) ? this._top -= 80: this._top += 80;
  if(this._left < 1200){
    this._left += 20;
  }else{
    this._left = 0;
  }
  this.$node.css({top:this._top ,left:this._left});

};