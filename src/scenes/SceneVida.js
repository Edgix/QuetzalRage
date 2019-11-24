class SceneVida extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneVida'
    });
    }
    init() {
    console.log('Escena vida');
    }
    create() {
        this.score= this.add.image (100,70, 'score');
        this.score.setScale(2);
        this.grupo3 = this.physics.add.staticGroup({
            key: 'vida',
            repeat: 2,
            setXY: {
            x: 50,
            y: 70,
            stepX: 50
            }
            });
            this.grupo3.children.iterate( (vida) => {
            vida.setScale(.7);
            } );
            //this.grupo2.playAnimation('vida');
            this.add.tween({
                targets: this.grupo3.getChildren(),
                y: 60,
                yoyo: true,
                duration: 700,
                repeat: -1,
                easy: 'Power1'
                });
                var contador = 2;
                this.registry.events.on('evento',(dato)=>{
                   if(dato == 1)
                   {
                    this.grupo3.getChildren()[contador].setVisible(false);
                    contador--;
                   }
                });

    }
    update(time, delta) {
    }
    }
    export default SceneVida;