FlappyPlane.Rock = function(game, x, y, frameName) {
    Phaser.Sprite.call(this, game, x, y, 'flappyplane');

    this.frameName = frameName;

    this.game.physics.p2.enable(this, true);

//    this.body.static = true;
    this.body.fixedRotation = true;
    this.body.data.gravityScale = 0;
};

FlappyPlane.Rock.prototype = Object.create(Phaser.Sprite.prototype);
FlappyPlane.Rock.prototype.constructor = FlappyPlane.Rock;

FlappyPlane.Rock.prototype.update = function() {
};