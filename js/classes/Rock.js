FlappyPlane.Rock = function(game, x, y, frameName) {
    Phaser.Sprite.call(this, game, x, y, 'flappyplane');

    this.frameName = frameName;

    this.game.physics.p2.enableBody(this, true);

    // remove all of the current collision shapes from the physics body
    this.body.clearShapes();
    // load our polygon physics data
    this.body.loadPolygon('physicsData', frameName);

    this.body.fixedRotation = true;
    this.body.data.gravityScale = 0;
    this.body.kinematic = true;
};

FlappyPlane.Rock.prototype = Object.create(Phaser.Sprite.prototype);
FlappyPlane.Rock.prototype.constructor = FlappyPlane.Rock;

FlappyPlane.Rock.prototype.update = function() {
};