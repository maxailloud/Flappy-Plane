FlappyPlane.Gameover = function(game) {
};

FlappyPlane.Gameover.prototype.create = function() {
    var text  = "You lose, click to restart";
    var style = { font: "22px Arial", fill: "white", align: "center" };
    this.add.text(this.world.centerX - 50, this.world.centerY - 20, text, style);

    this.input.onDown.addOnce(this.restartGame, this);
};

FlappyPlane.Gameover.prototype.restartGame = function() {
    this.game.state.start('Game');
};