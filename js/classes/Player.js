FlappyPlane.Player = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'flappyplane');

    this.anchor.set(0.5, 0.5);
    this.scale.set(0.7, 0.7);

    this.animations.add('fly', Phaser.Animation.generateFrameNames('planeRed', 1, 3), 30, true);
    this.animations.play('fly', 12, true);

    this.game.physics.p2.enableBody(this, true);

    // remove all of the current collision shapes from the physics body
    //this.body.clearShapes();
    // load our polygon physics data
    // enable only if a solution for scale issue is found
    //this.body.loadPolygon('physicsData', 'planeRed');

    this.body.fixedRotation = true;
};

FlappyPlane.Player.prototype = Object.create(Phaser.Sprite.prototype);
FlappyPlane.Player.prototype.constructor = FlappyPlane.Player;

FlappyPlane.Player.prototype.update = function() {
};

FlappyPlane.Player.prototype.flap = function() {
    this.body.velocity.y = -400;
};