window.onload = function() {
    var game = new Phaser.Game(800, 480, Phaser.AUTO, 'canvas-container');

    game.state.add('Boot',      FlappyPlane.Boot);
    game.state.add('Preloader', FlappyPlane.Preloader);
    game.state.add('MainMenu',  FlappyPlane.MainMenu);
    game.state.add('Game',      FlappyPlane.Game);
    game.state.add('Gameover',  FlappyPlane.Gameover);

    game.state.start('Boot');
};