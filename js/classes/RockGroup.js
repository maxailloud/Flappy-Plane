FlappyPlane.RockGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.topRock = new FlappyPlane.Rock(this.game, 854, 0, "rockGrassDown");
    this.add(this.topRock);

    this.bottomRock = new FlappyPlane.Rock(this.game, 854, 460, "rockGrass");
    this.add(this.bottomRock);

    this.hasScored = false;
};

FlappyPlane.RockGroup.prototype = Object.create(Phaser.Group.prototype);
FlappyPlane.RockGroup.prototype.constructor = FlappyPlane.RockGroup;

FlappyPlane.RockGroup.prototype.update = function() {
    this.checkWorldBounds();

    this.topRock.body.moveLeft(200);
    this.bottomRock.body.moveLeft(200);
};

FlappyPlane.RockGroup.prototype.reset = function(x, y) {
    this.topRock.reset(x, y);
    this.bottomRock.reset(x, 460);

    this.hasScored = false;
    this.exists = true;
};

FlappyPlane.RockGroup.prototype.checkWorldBounds = function() {
    if(!this.topRock.inWorld) {
        this.exists = false;
    }
};