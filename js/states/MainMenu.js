FlappyPlane.MainMenu = function(game) {
};

FlappyPlane.MainMenu.prototype.create = function() {
    this.input.onDown.addOnce(this.startGame, this);

    this.background = this.game.add.sprite(0, 0, 'flappyplane');
    this.background.frameName = 'background';

    this.textGetReady = this.game.add.sprite(this.game.world.centerX - 200, 100, 'flappyplane');
    this.textGetReady.frameName = 'textGetReady';

    this.plane = this.game.add.sprite(this.game.world.centerX - 10, this.game.world.centerY + 10, 'flappyplane');
    this.plane.anchor.set(0.5, 0.5);
    this.plane.scale.set(0.7, 0.7);
    this.plane.animations.add('fly', Phaser.Animation.generateFrameNames('planeRed', 1, 3), 30, true);
    this.plane.animations.play('fly', 12);
    this.tween = this.game.add.tween(this.plane)
        .to({ y: this.game.world.centerY - 10 }, 1000, Phaser.Easing.Linear.None)
        .to({ y: this.game.world.centerY + 10 }, 1000, Phaser.Easing.Linear.None)
        .loop()
        .start();

    this.tapTickTimer = this.game.time.create();
    this.tapTickTimer.loop(2000, this.animateTap, this);
    this.tapTickTimer.start();

    this.tapRight = this.game.add.sprite(this.game.world.centerX - 180, this.game.world.centerY - 15, 'flappyplane');
    this.tapRight.frameName = 'tapRight';

    this.tapLeft = this.game.add.sprite(this.game.world.centerX + 70, this.game.world.centerY - 15, 'flappyplane');
    this.tapLeft.frameName = 'tapLeft';

    this.tapTick = this.game.add.sprite(this.game.world.centerX + 20, this.game.world.centerY + 50, 'flappyplane');
    this.tapTick.frameName = 'tap';

    this.ground = this.game.add.tileSprite(0, 410, 808, 71, 'flappyplane');
    this.ground.frameName = 'groundGrass';
    this.ground.autoScroll(-200, 0);
};

FlappyPlane.MainMenu.prototype.startGame = function() {
    this.game.state.start('Game');
};

FlappyPlane.MainMenu.prototype.animateTap = function() {
    this.tapTick.frameName = 'tapTick';
    var tweenTimer = this.game.time.create();
    tweenTimer.add(100, function () {
        this.tapTick.frameName = 'tap';
    }, this);
    tweenTimer.start();
};