FlappyPlane.Rock = function(game, x, y, frameName) {
    Phaser.Sprite.call(this, game, x, y, 'flappyplane');

    this.frameName = frameName;
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;
};

FlappyPlane.Rock.prototype = Object.create(Phaser.Sprite.prototype);
FlappyPlane.Rock.prototype.constructor = FlappyPlane.Rock;

FlappyPlane.Rock.prototype.update = function() {
};