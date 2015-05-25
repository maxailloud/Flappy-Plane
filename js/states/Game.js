FlappyPlane.Game = function(game) {

    //When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
    this.game;      //a reference to the currently running game
    this.add;       //used to add sprites, text, groups, etc
    this.camera;    //a reference to the game camera
    this.cache;     //the game cache
    this.input;     //the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;      //for preloading assets
    this.math;      //lots of useful common math operations
    this.sound;     //the sound manager - add a sound, play one, set-up markers, etc
    this.stage;     //the game stage
    this.time;      //the clock
    this.tweens;    //the tween manager
    this.world;     //the game world
    this.particles; //the particle manager
    this.physics;   //the physics manager
    this.rnd;       //the repeatable random number generator
    //You can use any of these from any function within this State.
    //But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
};

FlappyPlane.Game.prototype.create = function() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents(true);
    this.game.physics.p2.gravity.y = 1200;

    this.background = this.game.add.sprite(0, 0, 'flappyplane');
    this.background.frameName = 'background';

    this.groundGroup = new FlappyPlane.GroundGroup(this.game);

    this.rocks = this.game.add.group();

    this.player = new FlappyPlane.Player(this.game, 325, this.game.world.centerY);
    this.game.add.existing(this.player);

    //  Create our collision groups. One for the player, one for the groundGroup, one for rocks
    this.groundCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.rockCollisionGroup = this.game.physics.p2.createCollisionGroup();

    var self = this;
    this.groundGroup.forEach(function(element) {
        element.bringToTop();
        //  Tell the rock to use the rockCollisionGroup
        element.body.setCollisionGroup(self.groundCollisionGroup);
        //  Ground will collide against the player
        //  If you don't set this they'll not collide with anything.
        //  The first parameter is either an array or a single collision group.
        element.body.collides(self.playerCollisionGroup);
    });

    this.player.body.setCollisionGroup(this.playerCollisionGroup);
    this.player.body.collides([this.groundCollisionGroup, this.rockCollisionGroup], this.deathHandler, this);

    var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    flapKey.onDown.add(this.player.flap, this.player);

    this.input.onDown.add(this.player.flap, this.player);

    this.rockGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateRocks, this);
    this.rockGenerator.timer.start();
};

FlappyPlane.Game.prototype.update = function() {
};

FlappyPlane.Game.prototype.generateRocks = function() {
    var rockY = this.game.rnd.integerInRange(-120, 120);
    var rockGroup = this.rocks.getFirstExists(false);
    if(!rockGroup) {
        rockGroup = new FlappyPlane.RockGroup(this.game, this.rocks);
    }
    rockGroup.reset(this.game.width + rockGroup.topRock.width / 2, rockY);
    var self = this;
    rockGroup.forEach(function(element) {
        //  Tell the rock to use the rockCollisionGroup
        element.body.setCollisionGroup(self.rockCollisionGroup);
        //  Rocks will collide against the player
        //  If you don't set this they'll not collide with anything.
        //  The first parameter is either an array or a single collision group.
        element.body.collides([self.playerCollisionGroup]);
    });
};

FlappyPlane.Game.prototype.deathHandler = function(body1, body2, rectangle, convex) {
    //console.log(body1);
    //console.log(body2);
    //console.log(rectangle);
    //console.log(convex);
    this.game.state.start('Gameover');
};

FlappyPlane.Game.prototype.shutdown = function() {
    this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
    this.groundGroup.destroy();
    this.player.destroy();
    this.rocks.destroy();
};