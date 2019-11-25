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
        this.load.image(["tierra", "tierra_b","Arrow", "score", "vida","halberd"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_2"])
        this.load.path = "./assets/personajes/";            //Ruta Personajes(Inicia aqui cosas de la carpeta Personajes)
        this.load.atlas('coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.atlas('soldado', 'soldado_atlas/soldado.png', 'soldado_atlas/soldado_atlas.json');
        this.load.animation('SoldadoAnim', 'soldado_atlas/soldado_anim.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        
    }
    create() {
        this.scene.launch('SceneVida');
        this.halberd = this.physics.add.image(350,200,'halberd');
        this.halberd.setDepth(3);
        this.halberd.setScale(1.2);
        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.cursor= this.input.keyboard.createCursorKeys();
        this.soldado = this.physics.add.sprite(600,200, 'soldado');
        this.soldado.setDepth(1);
        this.soldado.setScale(1.5);
        this.soldado.anims.play('soldadostatic_walk');
        this.soldado.body.setSize(this.soldado.width,this.soldado.height,true);
        this.coaxoch = this.physics.add.sprite(350,200, 'coaxoch');
        this.coaxoch.setDepth(1);
        this.coaxoch.setScale(1.5);
        this.soldado.body.setSize(34,38);
        this.soldado.body.setOffset(17,15);    
        this.coaxoch.anims.play('coaxoch_static_walk');
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.coaxoch.body.setSize(37.5,49);
        this.coaxoch.body.setOffset(4,2);
    
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

        this.grupo4=this.physics.add.staticGroup({
            key:'tierra',
            repeat:0,
            setXY:{
                x:31,
                y:580,
                stepX:64
            }
        });
                
                this.grupo4.children.iterate((tierra)=>{
                    tierra.setDepth(1);
                    tierra.setScale(.7);
    
            }   );
        
     
        this.tierraPiso2=this.physics.add.staticGroup({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1290,
                y:610,
                stepX:64
            }
        });
        this.tierraPiso2.children.iterate((tierra)=>{
            tierra.setDepth(1);
            tierra.setScale(.7);

        }   );
        this.tierraPiso3=this.physics.add.staticGroup({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1400,
                y:500,
                stepX:64
            }
        });
        this.tierraPiso3.children.iterate((tierra)=>{
            tierra.setDepth(1);
            tierra.setScale(.7);
        }   );

        this.tierraPiso4=this.physics.add.staticGroup({
            key:'tierra',
            repeat:3,
            setXY:{
                x:950,
                y:400,
                stepX:44.8
            }
        });
        this.tierraPiso4.children.iterate((tierra)=>{
            tierra.setDepth(1);
            tierra.setScale(.7);
            tierra.body.setSize(44.4,44.4);
        }   );
        this.tierraPiso5=this.physics.add.staticGroup({
            key:'tierra',
            repeat:0,
            setXY:{
                x:650,
                y:400,
                stepX:64
            }
        });
        this.tierraPiso5.children.iterate((tierra)=>{
            tierra.setDepth(1);

        }   );
        this.tierraPiso6=this.physics.add.staticGroup({
            key:'tierra',
            repeat:1,
            setXY:{
                x:450,
                y:400,
                stepX:64
            }
        });
        this.tierraPiso6.children.iterate((tierra)=>{
            tierra.setDepth(1);

        }   );
        this.tierraPiso7=this.physics.add.staticGroup({
            key:'tierra',
            repeat:2,
            setXY:{
                x:100,
                y:300,
                stepX:64
            }
        });
        this.tierraPiso7.children.iterate((tierra)=>{
            tierra.setDepth(1);

        }   );
        this.tierraPiso8=this.physics.add.staticGroup({
            key:'tierra',
            repeat:2,
            setXY:{
                x:450,
                y:200,
                stepX:64
            }
        });
        this.tierraPiso8.children.iterate((tierra)=>{
            tierra.setDepth(1);

        }   );
        this.Fondo = this.add.image(850, 320, "Nivel_2"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.2);

   

        // Sección donde se Agregaran Fisicas
        this.soldado.setBounce(.1);
        this.coaxoch.setBounce(.1);
        this.enemi1= this.physics.add.collider(this.coaxoch, this.soldado, (coaxoch, soldado)=>{
           
            coaxoch.setTint(0xff0000);
           

            if(soldado.body.touching.left){
                coaxoch.setVelocityY(-100);
                coaxoch.setVelocityX(1000);
                soldado.setVelocityX(1000);
            }
            if(soldado.body.touching.right)
            {
                coaxoch.setVelocityY(-100);
                coaxoch.setVelocityX(1000000);
                soldado.setVelocityX(-1000);
            }
            this.registry.events.emit('evento',1);
            this.enemi1.active =false;               
             setTimeout(() => {
                coaxoch.setTint();
                this.enemi1.active =true;
                soldado.setVelocityX(0);
                coaxoch.setVelocityX(0); 
            }, 150);
            
        });
        var contf=0;
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
       
        this.physics.add.collider(this.grupo, this.flechas, (coaxoch, soldado)=>{
            this.flechas.getChildren()[contf].body.enable = false;
            if(contf==10)
            {
                this.flechas.getChildren()[contf-10].destroy();
                contf--;
            }
            contf++;
            
        });
        this.physics.add.collider(this.grupo4, this.flechas, (coaxoch, soldado)=>{
            this.flechas.getChildren()[contf].body.enable = false;
            if(contf==10)
            {
                this.flechas.getChildren()[contf-10].destroy();
                contf--;
            }
            contf++;
            
        });
       

        this.physics.add.collider(this.coaxoch,this.flechas,(coaxoch,flechas) => {
            this.flechas.getChildren()[contf].body.enable = false;
            this.coaxoch.setVelocityY(-90);
            this.flechas.getChildren()[contf].destroy();

        });
        this.physics.add.collider(this.coaxoch,this.grupo);
        this.physics.add.collider(this.halberd,this.grupo);
        this.physics.add.collider(this.soldado,this.grupo);

         this.physics.add.collider(this.coaxoch,this.grupo4);
        this.physics.add.collider(this.halberd,this.grupo4);
        this.physics.add.collider(this.soldado,this.grupo4);
        this.physics.add.collider(this.coaxoch,this.grupo5);
        this.physics.add.collider(this.halberd,this.grupo5);
        this.physics.add.collider(this.soldado,this.grupo5);
        this.physics.add.collider(this.coaxoch,this.grupo6);
        this.physics.add.collider(this.halberd,this.grupo6);
        this.physics.add.collider(this.soldado,this.grupo6); 
        this.physics.add.collider(this.coaxoch,this.grupo7);
        this.physics.add.collider(this.halberd,this.grupo7);
        this.physics.add.collider(this.soldado,this.grupo7);
        this.physics.add.collider(this.coaxoch,this.grupo8);
        this.physics.add.collider(this.halberd,this.grupo8);
        this.physics.add.collider(this.soldado,this.grupo8);
        this.physics.add.collider(this.coaxoch,this.grupo9);
        this.physics.add.collider(this.halberd,this.grupo9);
        this.physics.add.collider(this.soldado,this.grupo9);
        this.physics.add.collider(this.coaxoch,this.tierraPiso2);
        this.physics.add.collider(this.coaxoch,this.tierraPiso3);
        this.physics.add.collider(this.coaxoch,this.tierraPiso4);
        this.physics.add.collider(this.coaxoch,this.tierraPiso5);
        this.physics.add.collider(this.coaxoch,this.tierraPiso6);
        this.physics.add.collider(this.coaxoch,this.tierraPiso7);
        this.physics.add.collider(this.coaxoch,this.tierraPiso8);






                   
        // Fin Seccion Fisicas


    }
    update(time, delta) {

        if (this.cursor.left.isDown)
    {
        this.coaxoch.setVelocityX(-160);
        this.coaxoch.flipX=true;
        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(10,2);

    }

    else if (this.cursor.right.isDown)
    {
        this.coaxoch.setVelocityX(160);
        this.coaxoch.flipX=false;
        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(4,2);

    }
    else if (this.coaxoch.body.touching.down)
    {
        
        this.coaxoch.setVelocityX(0);
        this.coaxoch.anims.play('coaxoch_static_walk',true)
    }

    if (this.cursor.up.isDown && this.coaxoch.body.touching.down)
    {
        this.coaxoch.setVelocityY(-350);
    }
    }
}

export default Nivel_2;