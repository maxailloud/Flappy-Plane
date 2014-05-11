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

    this.level;
    this.player;
};

FlappyPlane.Game.prototype.preload = function() {
    this.level   = new FlappyPlane.Level(this.game);
    this.player  = new FlappyPlane.Player(this.game);
};

FlappyPlane.Game.prototype.create = function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.level.create();

    this.player = new FlappyPlane.Player(this.game, 325, this.game.world.centerY);
    this.game.add.existing(this.player);

    var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    flapKey.onDown.add(this.player.flap, this.player);

    this.input.onDown.add(this.player.flap, this.player);
};

FlappyPlane.Game.prototype.update = function() {
    this.game.physics.arcade.collide(this.player, this.level.ground);

    this.level.update();
};