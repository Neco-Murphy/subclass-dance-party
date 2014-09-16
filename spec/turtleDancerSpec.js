describe("turtleDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();

    turtleDancer = new TurtleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(turtleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node move", function() {
    sinon.spy(turtleDancer.$node, 'toggle');
    turtleDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
