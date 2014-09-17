$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer =  new dancerMakerFunction(
      ($("body").height() -35)* Math.random() + 35,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancer.step();
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

// lineup function
  $('.lineup').on('click', function(event){
    var distance = 50;
    for(var i = 0; i < window.dancers.length; i++){
      var d = window.dancers[i];
      d.dancing = false;
      d.setPosition(distance, 10);
      debugger;
      distance += (Number(d.$node.css("height").slice(0,-2)) + 10);
      d.$node.show();
    };
  });

  //mouseover
  $('body').on('mouseover','img',function(){
    $(this).css({top: ($("body").height() * Math.random()), left: ($("body").width() * Math.random())});

  });
});


