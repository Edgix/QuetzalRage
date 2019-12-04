class SceneVida2 extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneVida2'
    });
    }
    init() {
    console.log('Escena vida 2');
    this.contador = 2;
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
               
                this.registry.events.on('evento',(dato)=>{
                   if(dato.num == 1)
                   {
                    console.log(this.contador);
                    this.grupo3.getChildren()[this.contador].setVisible(false);
                    this.contador--;
                   }
                   if(dato.num == 2)
                   {
                       if(this.contador<2){
                    this.contador++;
                    console.log(this.contador);
                    this.grupo3.getChildren()[this.contador].setVisible(true);
                       }
                   }
                   if(this.contador==-1)
                   {
                    this.registry.events.emit('reinicia');
                   }
                });
                

    }
    update(time, delta) {
        
    }
    }
    export default SceneVida2;