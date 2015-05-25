FlappyPlane.GroundGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.leftGround = new FlappyPlane.Ground(this.game, 0, 460, "groundGrass");
    this.add(this.leftGround);

    this.rightGround = new FlappyPlane.Rock(this.game, 800, 460, "groundGrass");
    this.add(this.rightGround);
};

FlappyPlane.GroundGroup.prototype = Object.create(Phaser.Group.prototype);
FlappyPlane.GroundGroup.prototype.constructor = FlappyPlane.RockGroup;

FlappyPlane.GroundGroup.prototype.update = function() {
    this.checkWorldBounds();

    this.leftGround.body.moveLeft(200);
    this.rightGround.body.moveLeft(200);
};

FlappyPlane.GroundGroup.prototype.checkWorldBounds = function() {
    if(!this.leftGround.inWorld) {
        this.leftGround.reset(1200, 460);
    }
    if(!this.rightGround.inWorld) {
        this.rightGround.reset(1200, 460);
        this.exists = false;
    }
};