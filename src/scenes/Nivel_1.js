class Nivel_1 extends Phaser.Scene{
    constructor(){
        super({
            key: "Nivel_1" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Nivel 1");
    }
    preload() {
        this.load.path = "./assets/Objetos/";               //Ruta de Objetos(Inicia aqui cosas de la carpeta Objetos)
        this.load.image('cacao', 'Cacao.png');
        this.load.image(["tierra", "tierra_b","Arrow", "score", "vida"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_1"]);
        this.load.path = "./assets/personajes/";            //Ruta Personajes(Inicia aqui cosas de la carpeta Personajes)
        this.load.atlas('coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.atlas('soldado', 'soldado_atlas/soldado.png', 'soldado_atlas/soldado_atlas.json');
        this.load.animation('SoldadoAnim', 'soldado_atlas/soldado_anim.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        
        
    }
    create() {
        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.cursor= this.input.keyboard.createCursorKeys();
        this.score= this.add.image (100, 100, 'score');
        this.soldado = this.physics.add.sprite(500,200, 'soldado');
        this.soldado.setDepth(1);
        this.soldado.setScale(2);
        this.soldado.anims.play('soldadostatic_walk');
        this.soldado.body.setSize(this.soldado.width,this.soldado.height,true);
        this.coaxoch = this.physics.add.sprite(200,200, 'coaxoch');
        this.coaxoch.body.setSize(20,20);
        this.coaxoch.setDepth(1);
        this.coaxoch.setScale(2);
        this.coaxoch.anims.play('coaxoch_static_walk');
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.cacao = this.physics.add.sprite(100,200, 'cacao');
        this.cacao.setDepth(1);


        this.grupo=this.physics.add.staticGroup({
            key:'tierra',
            repeat:46,
            setXY:{
                x:31,
                y:684,
                stepX:64
            }
        });
         this.grupo.children.iterate((tierra)=>{
             tierra.setDepth(1);

        }   );

        this.grupo2=this.physics.add.staticGroup({
            key:'tierra_b',
            repeat:46,
            setXY:{
                x:31,
                y:744,
                stepX:64
            }
        });
         this.grupo2.children.iterate((tierra_b)=>{
             tierra_b.setDepth(1);

        }   );

        this.Fondo = this.add.image(850, 320, "Nivel_1"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.15);

        this.score= this.add.image (200, 100, 'score');
        this.score.setScale(3);
        this.grupo4 = this.physics.add.staticGroup({
            
            key: 'vida',
            repeat: 0,
            setXY: {
            x: 230,
            y: 80,
            stepX: 50
            
            }
            
            });
                        this.grupo4.setVisible=true;

          

        this.grupo3 = this.physics.add.staticGroup({
            key: 'vida',
            repeat: 2,
            setXY: {
            x: 130,
            y: 80,
            stepX: 50
            }
            });
            this.grupo3.children.iterate( (vida) => {
            //vida.setScale(4);
            } );
            //this.grupo2.playAnimation('vida');
            this.add.tween({
                targets: this.grupo3.getChildren(),
                y: 90,
                yoyo: true,
                duration: 500,
                repeat: -1,
                easy: 'Power1'
                });

                this.add.tween({
                    targets: this.grupo4.getChildren(),
                    y: 90,
                    yoyo: true,
                    duration: 500,
                    repeat: -1,
                    easy: 'Power1'
                    });
    

        // Sección donde se Agregaran Fisicas
        this.soldado.setBounce(.1);
        this.coaxoch.setBounce(.1);
        this.physics.add.collider(this.cacao, this.grupo);
        this.physics.add.collider(this.cacao, this.coaxoch);
        this.physics.add.collider(this.soldado, this.grupo);
        
        this.physics.add.collider(this.coaxoch, this.soldado, (coaxoch, soldado)=>{
            var contador
            coaxoch.setTint(0xff0000);
            coaxoch.setX(300);
           // easy: 'bounce';
            this.grupo3.getChildren()[2].destroy();

            setTimeout(() => {
                coaxoch.setTint();
            }, 150);
        });
        this.physics.add.collider(this.cacao, this.coaxoch, (cacao, coaxoch)=>{
            var contador
            coaxoch.setTint(0xff0000);
            coaxoch.setX(300);
           // easy: 'bounce';
           
            this.grupo4.getChildren()[2];
            this.grupo4.setVisible=false;
            setTimeout(() => {
                coaxoch.setTint();
            }, 150);
        }); 
       
        
        this.physics.add.collider(this.coaxoch,this.grupo);
        this.physics.add.collider(this.cacao,this.grupo);
        
        // Fin Seccion Fisicas



    }
    update(time, delta) {

        if (this.cursor.left.isDown)
    {
        this.coaxoch.setVelocityX(-160);
        this.coaxoch.flipX=true;
        this.coaxoch.anims.play('coaxorun_walk');

    }

    else if (this.cursor.right.isDown)
    {
        this.coaxoch.setVelocityX(160);
        this.coaxoch.flipX=false;
        this.coaxoch.anims.play('coaxorun_walk');

    }
    else
    {
        this.coaxoch.setVelocityX(0);

    }

    if (this.cursor.up.isDown && this.coaxoch.body.touching.down)
    {
        this.coaxoch.setVelocityY(-310);
    }
    }
}

export default Nivel_1;