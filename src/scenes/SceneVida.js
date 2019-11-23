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
                this.flechas = this.physics.add.group();
                this.lluvia = this.time.addEvent({

                delay: 100,
                callback: () =>{
                    var random = Phaser.Math.Between(0,4);
                    var x = Phaser.Math.Between(0,1500);
                    switch(random)
                    {
                        case 0:
                                this.flecha = this.flechas.create(x,-100,'Arrow').setScale(1);
                                this.flecha.setDepth(1);
                                this.flecha.angle = 50;
                                this.flecha.body.setSize(7,7).setOffset(23,45);
                                this.flecha.body.rotation=20;
                               
                        break;
                    }
                },
                repeat:-1
            })

    }
    update(time, delta) {
    }
    }
    export default SceneVida;