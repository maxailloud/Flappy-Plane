FlappyPlane.Player = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'flappyplane');

    this.anchor.set(0.5, 0.5);
    this.animations.add('fly', Phaser.Animation.generateFrameNames('planeRed', 1, 3), 30, true);
    this.animations.play('fly', 12, true);

    this.game.physics.arcade.enableBody(this);
};

FlappyPlane.Player.prototype = Object.create(Phaser.Sprite.prototype);
FlappyPlane.Player.prototype.constructor = FlappyPlane.Player;

FlappyPlane.Player.prototype.update = function() {
    if(this.angle < 90) {
        this.angle += 2;
    }
};

FlappyPlane.Player.prototype.flap = function() {
    this.body.velocity.y = -400;

    this.game.add.tween(this).to({angle: -30}, 100).start();
};