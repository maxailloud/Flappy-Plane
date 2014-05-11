FlappyPlane.Level = function(game) {
    this.game = game;
};

// Setup the example
FlappyPlane.Level.prototype.create = function() {
    this.background = this.game.add.sprite(0, 0, 'flappyplane');
    this.background.frameName = 'background';

    this.ground = new FlappyPlane.Ground(this.game, 0, this.game.height - 71);
    this.game.add.existing(this.ground);
};

// The update() method is called every frame
FlappyPlane.Level.prototype.update = function() {
};