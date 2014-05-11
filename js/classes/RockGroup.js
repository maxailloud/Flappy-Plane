FlappyPlane.RockGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.topRock = new FlappyPlane.Rock(this.game, 0, 0, "rockGrassDown");
    this.add(this.topRock);

    this.bottomRock = new FlappyPlane.Rock(this.game, 0, 460, "rockGrass");
    this.add(this.bottomRock);

    this.hasScored = false;

    this.setAll('body.velocity.x', -200);
};

FlappyPlane.RockGroup.prototype = Object.create(Phaser.Group.prototype);
FlappyPlane.RockGroup.prototype.constructor = FlappyPlane.RockGroup;

FlappyPlane.RockGroup.prototype.update = function() {
    this.checkWorldBounds();
};

FlappyPlane.RockGroup.prototype.reset = function(x, y) {
    this.topRock.reset(0, 0);
    this.bottomRock.reset(0, 460);

    this.x = x;
    this.y = y;

    this.setAll('body.velocity.x', -200);

    this.hasScored = false;
    this.exists = true;
};

FlappyPlane.RockGroup.prototype.checkWorldBounds = function() {
    if(!this.topRock.inWorld) {
        this.exists = false;
    }
};