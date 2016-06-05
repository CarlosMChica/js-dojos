function MarsRover(position, direction) {

  this.position = position;
  this.facingDirection = direction;

  this.direction = function () {
    return this.facingDirection;
  };

  this.execute = function (commands) {
    for (var i = 0; i < commands.length; i++) {
      if (commands[i] == "F") {
        this.position.y++
      } else if (commands[i] == "B") {
        this.position.y--;
      } else if (commands[i] == "R") {
        this.facingDirection = "R";
      } else if (commands[i] == "L") {
        this.facingDirection = "L";
      }
    }
  };
}
