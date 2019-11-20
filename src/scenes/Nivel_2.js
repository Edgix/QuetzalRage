class Nivel_2 extends Phaser.Scene{
    constructor(){
        super({
            key: "Nivel_2" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Nivel 2");
    }
    preload() {
        this.load.path = "./assets/Objetos/";               //Ruta de Objetos(Inicia aqui cosas de la carpeta Objetos)
        this.load.image(["tierra", "tierra_b","Arrow", "score", "vida", "cacao"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_2"])
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
        this.coaxoch.setDepth(1);
        this.coaxoch.setScale(2);
        this.soldado.body.setSize(34,38);
        this.soldado.body.setOffset(17,15);    
        this.coaxoch.anims.play('coaxoch_static_walk');
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.coaxoch.body.setSize(37.5,49);
        this.coaxoch.body.setOffset(4,2);
        this.cacao = this.physics.add.sprite(100,200, 'cacao');
        this.cacao.body.setCircle(20);
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
                y:748,
                stepX:64
            }
        });
         this.grupo2.children.iterate((tierra_b)=>{
             tierra_b.setDepth(1);

        }   );

        this.Fondo = this.add.image(850, 320, "Nivel_2"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.2);

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


        // Sección donde se Agregaran Fisicas
        this.soldado.setBounce(.1);
        this.coaxoch.setBounce(.1);
        this.physics.add.collider(this.soldado, this.grupo);
        var contador =2;    
        this.physics.add.collider(this.coaxoch, this.soldado, (coaxoch, soldado)=>{
           
            coaxoch.setTint(0xff0000);
            soldado.setVelocityX(1000)
            easy: 'bounce';
            this.grupo3.getChildren()[contador].destroy();
            contador--;
            setTimeout(() => {
                coaxoch.setTint();
            }, 150);
        });
        
        this.physics.add.collider(this.cacao, this.grupo);
        this.physics.add.collider(this.cacao, this.coaxoch);
        this.physics.add.collider(this.coaxoch,this.grupo);
        this.physics.add.collider(this.cacao, this.coaxoch, (cacao, coaxoch)=>{
            var contador
            coaxoch.setTint(0xff0000);
            coaxoch.setX(300);
           // easy: 'bounce';
           
            //this.grupo4.getChildren()[2];
            this.grupo4.setVisible=false;
            setTimeout(() => {
                coaxoch.setTint();
            }, 150);
        });
        this.physics.add.collider(this.cacao,this.grupo);

        // Fin Seccion Fisicas



    }
    update(time, delta) {

        if (this.cursor.left.isDown)
    {
        this.coaxoch.setVelocityX(-160);
        this.coaxoch.flipX=true;
        this.coaxoch.anims.play('coaxorun_walk');
        this.coaxoch.body.setOffset(10,2);


    }

    else if (this.cursor.right.isDown)
    {
        this.coaxoch.setVelocityX(160);
        this.coaxoch.flipX=false;
        this.coaxoch.anims.play('coaxorun_walk');
        this.coaxoch.body.setOffset(4,2);

    }
    else
    {
        this.coaxoch.setVelocityX(0);

    }

    if (this.cursor.up.isDown && this.coaxoch.body.touching.down)
    {
        this.coaxoch.setVelocityY(-350);
        
    }
    }
}

export default Nivel_2;