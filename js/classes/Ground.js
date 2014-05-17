FlappyPlane.Ground = function(game, x, y) {
    Phaser.TileSprite.call(this, game, x, y, 1600, 70, 'flappyplane');

    this.frameName = "groundGrass";

    this.autoScroll(-200,0);

    this.game.physics.p2.enable(this, false);
    this.body.static = true;
};

FlappyPlane.Ground.prototype = Object.create(Phaser.TileSprite.prototype);
FlappyPlane.Ground.prototype.constructor = FlappyPlane.Ground;

FlappyPlane.Ground.prototype.update = function() {
};