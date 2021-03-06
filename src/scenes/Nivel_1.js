import SceneVida from "./SceneVida.js";
import ganaste from "./ganaste.js";
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
        this.load.image(["tierra", "tierra_b","Arrow", "score", "vida","halberd", "Cacao", "ganar","barrera","Macuahuitl"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_1"])
        this.load.path = "./assets/personajes/";            //Ruta Personajes(Inicia aqui cosas de la carpeta Personajes)
        this.load.atlas('coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.atlas('hernan', 'hernan_atlas/hernan.png','hernan_atlas/hernan_atlas.json');
        this.load.atlas('soldado', 'soldado_atlas/soldado.png', 'soldado_atlas/soldado_atlas.json');
        this.load.animation('SoldadoAnim', 'soldado_atlas/soldado_anim.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        this.load.animation('HernanAnim', 'hernan_atlas/hernan_anim.json');

        this.load.path = "./assets/musica/";
        this.load.audio('musicas', 'Nivel_uno.mp3');
       
        
    }
    
    create() {
        this.velo;
        this.flip =false;
        this.scene.launch('SceneVida2');
        this.gana = this.physics.add.image(4280,300,'ganar');
        this.gana.setDepth(1);
        this.gana.setScale(2);
        this.gana.body.setSize(55,30);//55
        this.gana.body.setCircle(7);
        this.gana.body.setEnable(false);


        this.Macuahuitl = this.physics.add.image(350,200,'Macuahuitl').setOrigin(.2,.5);
        this.Macuahuitl.setDepth(3);
        this.Macuahuitl.setScale(1.2);
        this.Macuahuitl.body.setSize(10,5);
        this.Macuahuitl.body.setOffset(50,25);
        this.Macuahuitl.body.allowGravity= false;
        this.Macuahuitl2 = this.physics.add.image(350,200,'Macuahuitl').setOrigin(.2,.5);
        this.Macuahuitl2.setDepth(3);
        this.Macuahuitl2.setScale(1.2);
        this.Macuahuitl2.body.setSize(10,5);
        this.Macuahuitl2.body.setOffset(50,25);
        this.Macuahuitl2.body.allowGravity= false;

        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.cursor= this.input.keyboard.createCursorKeys();
              //SOLDADOS
  

        this.coaxoch = this.physics.add.sprite(350,500, 'coaxoch');
        this.coaxoch.setDepth(1);
        this.coaxoch.setScale(1.5);
     
        this.coaxoch.anims.play('coaxoch_static_walk');
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.coaxoch.body.setSize(37.5,49);
        this.coaxoch.body.setOffset(4,2);
        //HERNAN
        this.hernan = this.physics.add.sprite(3200,400, 'hernan');
        this.hernan.setDepth(1);
        this.hernan.setScale(3);
     
        this.hernan.anims.play('hernanstatic_walk');
        this.hernan.body.setSize(this.hernan.width,this.hernan.height,true);
        this.hernan.body.setSize(40,55);
        this.hernan.body.setOffset(14,6)

        //SOLDADOS
  
       this.audios2 = this.sound.add('musicas',{loop:true});
        this.Fondo = this.add.image(2700, 320, "Nivel_1"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.2);
        this.cameras.main.setBounds(0,0,4500,760);
        this.cameras.main.startFollow(this.coaxoch);
        this.audios2.play();

       //GRUPO SOLDADO
       this.grupoCacao= this.physics.add.group({
            key: 'Cacao',
            repeat: 0,
            setXY:{
                x:1700,
                y:0,
                stepX:64
            }
       });
      
    this.grupoCacao.createMultiple({
        key: 'Cacao',
        repeat:0,
        setXY:{
            x: 2500,
            y: 0,
            stepX:64
        }
    });
    this.grupoCacao.createMultiple({
        key: 'Cacao',
        repeat:0,
        setXY:{
            x: 3000,
            y: 600,
            stepX:64
        }
    });
    this.grupoCacao.children.iterate((Cacao)=>{
        Cacao.setDepth(1);
        Cacao.body.setOffset(17,15);
        Cacao.body.setCircle(15); 
    });
   
        this.grupoSoldado=this.physics.add.group({
            key: 'soldado',
            repeat:0,
            setXY:{
                x: 1400,
                y: 200,
                stepX:64
            
            }
        });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 800,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 1600,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 1850,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 2200,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 2900,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 3000,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 3200,
                    y: 200,
                    stepX:64
                }
            });
           
            this.grupoSoldado.children.iterate((soldado)=>{
                soldado.setDepth(1);
                soldado.setScale(1.5);
                soldado.body.setSize(34,38);
                soldado.body.setOffset(17,15); 
                soldado.anims.play('soldadostatic_walk');
            });
           

        this.grupo=this.physics.add.staticGroup({
            key:'tierra',
            repeat:90,
            setXY:{
                x:3,
                y:684,
                stepX:44.8
            }
        });
        //piso1
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:300,
                y:610,
                stepX:44.8
        }});
        //piso2
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:700,
                y:500,
                stepX:44.8
        }});
        //piso3
        this.grupo.createMultiple({
            key:'tierra',
            repeat:0,
            setXY:{
                x:900,
                y:400,
                stepX:44.8
        }});
        //piso4
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1400,
                y:300,
                stepX:44.8
        }});
        //piso5
        this.grupo.createMultiple({
            key:'tierra',
            repeat:3,
            setXY:{
                x:450,
                y:500,
                stepX:44.8
        }});
        //grupo6--cacao
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:100,
                y:300,
                stepX:44.8
        }});
        //piso7
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:450,
                y:200,
                stepX:44.8
        }});
        //piso8
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1650,
                y:610,
                stepX:44.8
        }});
        //piso9
        this.grupo.createMultiple({
            key:'tierra',
            repeat:3,
            setXY:{
                x:1700,
                y:400,
                stepX:44.8
        }});
        //piso10
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:1950,
                y:300,
                stepX:44.8
        }});
        //piso11
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:2200,
                y:280,
                stepX:44.8
        }});
        //piso12
        this.grupo.createMultiple({
            key:'tierra',
            repeat:3,
            setXY:{
                x:2450,
                y:200,
                stepX:44.8
        }});
        //piso13
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:2750,
                y:300,
                stepX:44.8
        }});
        //piso14
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:3050,
                y:420,
                stepX:44.8
        }});

        //piso15
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:3400,
                y:480,
                stepX:44.8
        }});
        

        //piso16
        this.grupo.createMultiple({
            key:'tierra',
            repeat:2,
            setXY:{
                x:3680,
                y:400,
                stepX:44.8
        }});

        //piso17
        this.grupo.createMultiple({
            key:'tierra',
            repeat:3,
            setXY:{
                x:3950,
                y:320,
                stepX:44.8
        }});

        //piso18
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:4250,
                y:450,
                stepX:44.8
        }});
        this.grupo.createMultiple({
            key:'tierra',
            repeat:11,
            setXY:{
                x:4000,
                y:684,
                stepX:44.8
        }});
        
        this.grupo.children.iterate((tierra)=>{
            tierra.setDepth(1);
            tierra.setScale(.7);
            tierra.setScale(.7);
            tierra.body.setSize(44,44);
            tierra.body.setOffset(10,10);
            tierra.body.setSize(44,44);
            tierra.body.setOffset(10,10);

       }   );
        this.grupo2=this.physics.add.staticGroup({
            key:'tierra_b',
            repeat:90,
            setXY:{
                x:31,
                y:738,
                stepX:64
            }
        });
         this.grupo2.children.iterate((tierra_b)=>{
             tierra_b.setDepth(1);

        }   );

        this.tierraPiso4=this.physics.add.group({
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
            tierra.body.setSize(64,64);
            tierra.body.setOffset(1,1);
            tierra.body.allowGravity = false;
            tierra.setImmovable(true);
            tierra.setVelocityX(50);
        }   );


        // Sección donde se Agregaran Fisicas
        this.coaxoch.setBounce(.1);
        this.enemi1= this.physics.add.collider(this.coaxoch, this.grupoSoldado, (coaxoch, grupoSoldado)=>{
           
            coaxoch.setTint(0xff0000);
           
           this.registry.events.emit('evento',{num:1, cancion:this.audios});
            this.enemi1.active =false;               
             setTimeout(() => {
                coaxoch.setTint();
                this.enemi1.active =true;
                grupoSoldado.setVelocityX(0);
                coaxoch.setVelocityX(0); 
            }, 1000);
            
        });
        var contf=0;
        this.flechas = this.physics.add.group();



        this.lluvia = this.time.addEvent({

        delay: 150,
        callback: () =>{
            var random = Phaser.Math.Between(0,4);
            var x = Phaser.Math.Between(this.coaxoch.x-750,this.coaxoch.x+750);
            switch(random)
            {
                case 0:
                        this.flecha = this.flechas.create(x,-100,'Arrow').setScale(1);
                        this.flecha.setDepth(1);
                        this.flecha.angle = 50;
                        this.flecha.body.setSize(7,7).setOffset(23,45);
                        this.flecha.body.rotation=20;
                        this.flecha.setVelocityX(-100)
                break;
            }
        },
        repeat:-1
    })
       
        this.physics.add.collider(this.coaxoch,this.flechas,(coaxoch,flechas) => {
            flechas.body.enable = false;
            this.registry.events.emit('evento',{num:1, cancion:this.audios});
            if(!coaxoch.body.touching.down)
            {
                this.coaxoch.setVelocityY(120);
            }
            else{
                this.coaxoch.setVelocityY(-100);
            }
            flechas.destroy();
            coaxoch.setTint(0xff0000);              
             setTimeout(() => {
                coaxoch.setTint();
            }, 150);
            

        });
       
        this.physics.add.collider(this.grupo, this.flechas, (grupo, flechas)=>{
            flechas.body.enable = false;
            if(contf==10)
            {
                this.flechas.getChildren()[contf-10 ].destroy();
                contf--;
                
            }
            contf++;
            
        });
        this.physics.add.collider(this.coaxoch,this.tierraPiso4,(coaxoch,tierraPiso4) => {

            if(this.coaxoch.body.touching.down)
            {
                coaxoch.setVelocityX(this.velo);
                this.coaxoch.anims.play('coaxoch_static_walk',true);
            }

        });
        
        
        this.physics.add.collider(this.coaxoch,this.grupo,(coaxoch,grupo) => {
            coaxoch.setVelocityX(0);
            this.coaxoch.anims.play('coaxoch_static_walk',true);
        });

        this.physics.add.collider(this.Macuahuitl,this.grupo);
        this.physics.add.collider(this.grupoSoldado,this.grupo);
        //HERNAN

        var contp=0;
       this.physics.add.collider(this.Macuahuitl,this.hernan,(Macuahuitl,hernan) => {
        
                hernan.setTint(0xff0000);  
                console.log("golpe");
                contp++;
                hernan.active =false;               


         console.log(contp);
        if(contp==10){
            console.log("poncho se la come doblada");
            hernan.setVisible(false);
            hernan.enable=false;
            this.gana.body.setEnable(true);

        } 
             setTimeout(() => {
                hernan.active =true;
                hernan.setTint();
            }, 1000);
            

        });

       this.physics.add.collider(this.grupoCacao, this.grupo);
       
       this.salud= this.physics.add.collider(this.coaxoch, this.grupoCacao, (coaxoch, grupoCacao)=>{

        coaxoch.setTint(0x0000ff);
       this.registry.events.emit('evento', {num: 2});
        this.salud.active =false;   


         setTimeout(() => {
            coaxoch.setTint();
            this.salud.active =true;


        }, 150);
        grupoCacao.destroy();

    });

    this.physics.add.collider(this.Macuahuitl2,this.grupoSoldado,(Macuahuitl,grupoSoldado) => {
        grupoSoldado.destroy();
    });
    
    this.physics.add.collider(this.grupoSoldado,this.tierraPiso4);
    this.physics.add.collider(this.gana, this.grupo);
    this.physics.add.collider(this.hernan, this.grupo);

    this.physics.add.collider(this.coaxoch, this.gana, (coaxoch, gana)=>{
        
        this.scene.add('ganaste',ganaste);
        this.scene.start('ganaste');
        this.scene.stop();
        
    });
    
   // Fin Seccion Fisicas

    }
    update(time, delta) {
    this.Macuahuitl.y=this.coaxoch.y;
    this.Macuahuitl2.y=this.coaxoch.y;

    if( this.flip ==false)
    {
        this.Macuahuitl.x = this.coaxoch.x;
        this.Macuahuitl.body.setOffset(35,25);
        this.Macuahuitl2.x = this.coaxoch.x;
        this.Macuahuitl2.body.setOffset(35,25);
    }else if( this.flip ==true)
    {
        this.Macuahuitl.x = this.coaxoch.x-55;
        this.Macuahuitl.body.setOffset(25,25);
        this.Macuahuitl2.x = this.coaxoch.x-55;
        this.Macuahuitl2.body.setOffset(25,25);
    }
     if (this.cursor.space.isDown)
     {  this.Macuahuitl.body.enable=true;
        this.Macuahuitl2.body.enable=true;
        if(this.flip==false){
            this.Macuahuitl.x=this.Macuahuitl.x +20;
            this.Macuahuitl2.x=this.Macuahuitl2.x +20;
         }
            
              if(this.flip==true){
                 this.Macuahuitl.x=this.Macuahuitl.x -20;
                 this.Macuahuitl2.x=this.Macuahuitl2.x -20;
             }
             setTimeout(() => {
                this.Macuahuitl.body.enable=false;
                this.Macuahuitl2.body.enable=false;
            }, 500);
     }
    
    if (this.cursor.left.isDown)
    {
        this.Macuahuitl.x = this.coaxoch.x-55;
        this.Macuahuitl.body.setOffset(25,25);
        this.Macuahuitl2.x = this.coaxoch.x-55;
        this.Macuahuitl2.body.setOffset(25,25);
        this.coaxoch.setVelocityX(-200);
        this.coaxoch.flipX=true;
        this.Macuahuitl.flipX=true;
        this.Macuahuitl2.flipX=true;
        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(10,2);
        this.flip=true;
    }
    else if (this.cursor.right.isDown)
    {
        this.Macuahuitl.x = this.coaxoch.x;
        this.Macuahuitl.body.setOffset(25,25);
        this.Macuahuitl2.x = this.coaxoch.x;
        this.Macuahuitl2.body.setOffset(25,25);
        this.coaxoch.setVelocityX(200);
        this.coaxoch.flipX=false;
        this.Macuahuitl.flipX=false;
        this.Macuahuitl2.flipX=false;

        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(4,2);
        this.flip =false;
    }
    if (this.cursor.up.isDown && this.coaxoch.body.touching.down)
    {
        this.coaxoch.setVelocityY(-350);
    }

    if (this.tierraPiso4.getChildren()[2].x >= 1200)
    {
        this.tierraPiso4.setVelocityX(-150);
        this.velo=-150;
    }
    else if (this.tierraPiso4.getChildren()[0].x <= 900)
    {
        this.tierraPiso4.setVelocityX(150);
        this.velo=150;
    }
    
     
    this.grupoSoldado.children.iterate((Soldado)=>{
        
        if(Phaser.Math.Distance.Between(Soldado.x,Soldado.y,this.coaxoch.x,this.coaxoch.y)<400)
        {
            if (this.coaxoch.x < Soldado.x && Soldado.body.velocity.x >= 0) {
                // move enemy to left
                Soldado.setVelocityX(-150);
                Soldado.flipX =true;
            }
            // if player to right of enemy AND enemy moving to left (or not moving)
            else if (this.coaxoch.x > Soldado.x && Soldado.body.velocity.x <= 0) {
                // move enemy to right
                Soldado.setVelocityX(150);
                Soldado.flipX =false;
            }
        }else{
            Soldado.setVelocityX(0);
        }
        
     });
    
    }
}

export default Nivel_1;