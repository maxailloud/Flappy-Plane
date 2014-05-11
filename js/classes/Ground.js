FlappyPlane.Ground = function(game, x, y) {
    Phaser.TileSprite.call(this, game, x, y, 808, 71, 'flappyplane');

    this.frameName = "groundGrass";

    this.autoScroll(-200,0);

    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;

    this.body.immovable = true;
};

FlappyPlane.Ground.prototype = Object.create(Phaser.TileSprite.prototype);
FlappyPlane.Ground.prototype.constructor = FlappyPlane.Ground;

FlappyPlane.Ground.prototype.update = function() {
};