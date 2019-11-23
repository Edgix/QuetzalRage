class SceneScore extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneScore'
    });
    }
    init() {
    console.log('Escena score');
    }
    create() {
        this.score= this.add.image (100,70, 'score');
        this.score.setScale(2);

    }
    update(time, delta) {
    }
    }
    export default SceneScore;