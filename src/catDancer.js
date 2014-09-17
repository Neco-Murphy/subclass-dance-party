var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 30);
  this.$node = $('<img class="catDancer" src="cat.jpg" height ="100">');
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

  // when others are around...
  var dancers = window.dancers;
  debugger;
  var x = Number(this.$node.css("left").slice(0, -2));
  var y = Number(this.$node.css("top").slice(0, -2));

  for(var i = 0; i < dancers.length; i++){
    if(this.$node !== dancers[i].$node){
      var hisX = Number(dancers[i].$node.css('left').slice(0, -2));
      var hisY = Number(dancers[i].$node.css('top').slice(0, -2));
      if(Math.sqrt((x-hisX) * (x-hisX) + (y-hisY) * (y-hisY) ) <= 200){
        this.$node.attr('src', 'grampy.jpg');
      }else{
        this.$node.attr('src', 'cat.jpg');
      }
    }
  }

  if(this.dancing){
    this.count++;
    (this.count % 40 < 20) ? y -= 10: y += 10;
    if(x < 1200){
      x += 5;
    }else{
      x = 0;
    }
    this.setPosition(y, x);
  }


};


// <span class="catDancer"></span>