describe("Mars Rover", function () {

  var marsRover;
  var position = {
    x: 0,
    y: 0
  };

  describe("when facing north", function () {

    beforeEach(function () {
      marsRover = new MarsRover(position, "N");
    });

    it("should be at given initial position facing initial direction", function () {
      var position = {
        x: 0,
        y: 0
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("N");
    });

    it("should move forward facing same direction when executing 'F' command", function () {
      marsRover.execute("F");

      var position = {
        x: 0,
        y: 1
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("N");
    });

    it("should move forward twice facing same direction when executing 'FF' command", function () {
      marsRover.execute("FF");

      var position = {
        x: 0,
        y: 2
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("N");
    });

    it("should move backwards facing same direction when executing 'B' command", function () {
      marsRover.execute("B");

      var position = {
        x: 0,
        y: -1
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("N");

    });

    it("should turn right staying in the same position when executing 'R' command", function () {
      marsRover.execute("R");

      var position = {
        x: 0,
        y: 0
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("R");
    });

    it("should turn left staying in the same position when executing 'L' command", function () {
      marsRover.execute("L");

      var position = {
        x: 0,
        y: 0
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("L");
    });

  });

  describe("when facing east", function () {

    beforeEach(function () {
      marsRover = new MarsRover(position, "E");
    });

    it("should move forward facing same direction when executing 'F' command", function () {
      marsRover.execute("F");

      var position = {
        x: 1,
        y: 0
      };
      expect(marsRover.position).toEqual(position);
      expect(marsRover.direction()).toBe("E");
    })

  });
});
