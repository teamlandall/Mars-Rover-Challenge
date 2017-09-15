var assert = require('assert');

describe('Rover', () => {

  const Rover = require('../src/rover');

  describe('validate params', () => {

    it('should throw error if no initialPos is provided', () => {
      const pos = {};
      const input = ["L", "L", "M"];
      const obstacle = {x: 1, y: 2};

      assert.equal('No initial position provided', Rover(pos, input, obstacle));
    });

    it('should throw error if no input is provided', () => {
      const pos = {x: 0, y: 0, dir: "N"};
      const input = null;
      const obstacle = { x: 1, y: 2 };

      assert.equal('No input provided', Rover(pos, input, obstacle));
    });
    
  });

  describe('Check rovers navigation', () => {

    it('should turn left', () => {
      const pos = { x: 0, y: 0, dir: "N" };
      const input = ["L"];
      const obstacle = { x: 0, y: 6 };

      const expectedResult = {x:0, y:0, dir: "W"};

      assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
    });

    it('should turn right', () => {
      const pos = { x: 0, y: 0, dir: "N" };
      const input = ["R"];
      const obstacle = { x: 0, y: 6 };

      const expectedResult = { x: 0, y: 0, dir: "E" };

      assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
    });

    it('should move forward', () => {
      const pos = { x: 0, y: 0, dir: "N" };
      const input = ["F"];
      const obstacle = { x: 0, y: 6 };

      const expectedResult = { x: 0, y: 1, dir: "N" };

      assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
    });

    it('should move backward', () => {
      // change starting position, not testing grid wrapping yet
      const pos = { x: 1, y: 1, dir: "N" };
      const input = ["B"];
      const obstacle = { x: 0, y: 6 };

      const expectedResult = { x: 1, y: 0, dir: "N" };

      assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
    });

    describe('Check rovers grid wrapping', () => {

      it('should wrap top to bottom', () => {
        const pos = { x: 0, y: 10, dir: "N" };
        const input = ["F"];
        const obstacle = { x: 0, y: 6 };

        const expectedResult = { x: 0, y: 0, dir: "N" };

        assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
      });

      it('should wrap bottom to top', () => {
        const pos = { x: 0, y: 0, dir: "N" };
        const input = ["B"];
        const obstacle = { x: 0, y: 6 };

        const expectedResult = { x: 0, y: 10, dir: "N" };

        assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
      });

      it('should wrap left to right', () => {
        const pos = { x: 0, y: 0, dir: "N" };
        const input = ["L", "F"];
        const obstacle = { x: 0, y: 6 };

        const expectedResult = { x: 10, y: 0, dir: "W" };

        assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
      });

      it('should wrap right to left', () => {
        const pos = { x: 10, y: 0, dir: "N" };
        const input = ["R", "F"];
        const obstacle = { x: 0, y: 6 };

        const expectedResult = { x: 0, y: 0, dir: "E" };

        assert.deepEqual(expectedResult, Rover(pos, input, obstacle));
      });
    });

    describe('check obstacle detection', () => {

      it('should detect obstacle', () => {
        const pos = { x: 0, y: 0, dir: "N" };
        const input = ["F", "F"];
        const obstacle = { x: 0, y: 2 };

        const expectedResult = "Obstacle detected. Unable to continue.";
        assert.equal(expectedResult, Rover(pos, input, obstacle));
      })
    });

  });

});