FlappyPlane.Preloader = function(game) {
    this.background = null;
    this.loadingBar = null;
};

FlappyPlane.Preloader.prototype.preload = function() {
    this.background = this.add.sprite(0, 0, 'preloaderBackground');
    this.loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.loadingBar.anchor.set(0.5, 0.5);

    this.load.setPreloadSprite(this.loadingBar);

    this.load.atlas('flappyplane', 'assets/gfx/flappyplane.png', 'assets/gfx/flappyplane.json');
};

FlappyPlane.Preloader.prototype.create = function() {
    var tween = this.add.tween(this.loadingBar)
        .to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.startGame, this);
};

FlappyPlane.Preloader.prototype.startGame = function() {
    this.game.state.start('Game');
};