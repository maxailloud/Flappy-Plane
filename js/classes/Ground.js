FlappyPlane.Ground = function(game, x, y) {
    Phaser.TileSprite.call(this, game, x, y, 1600, 70, 'flappyplane', 'groundGrass');

    this.autoScroll(-200,0);

    this.game.physics.p2.enableBody(this, true);
    this.body.kinematic = true;

    // remove all of the current collision shapes from the physics body
    this.body.clearShapes();
    // load our polygon physics data
    this.body.loadPolygon('physicsData', this.frameName);
};

FlappyPlane.Ground.prototype = Object.create(Phaser.TileSprite.prototype);
FlappyPlane.Ground.prototype.constructor = FlappyPlane.Ground;

FlappyPlane.Ground.prototype.update = function() {
};