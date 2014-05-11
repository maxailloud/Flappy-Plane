FlappyPlane.Level = function(game) {
    this.game = game;
};

// Setup the example
FlappyPlane.Level.prototype.create = function() {
    this.background = this.game.add.sprite(0, 0, 'flappyplane');
    this.background.frameName = 'background';

    this.ground = new FlappyPlane.Ground(this.game, 0, this.game.height - 71);
    this.game.add.existing(this.ground);

    this.rockGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateRocks, this);
    this.rockGenerator.timer.start();

    this.rocks = this.game.add.group();
};

// The update() method is called every frame
FlappyPlane.Level.prototype.update = function() {
};

FlappyPlane.Level.prototype.generateRocks = function() {
    var rockY = this.game.rnd.integerInRange(-120, 120);
    var rockGroup = this.rocks.getFirstExists(false);
    if(!rockGroup) {
        rockGroup = new FlappyPlane.RockGroup(this.game, this.rocks);
    }
    rockGroup.reset(this.game.width + rockGroup.topRock.width / 2, rockY);
};