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
        this.load.path = "./assets/musica/";
        this.load.audio('musica', 'Nivel_dos.mp3');
       
        
    }
    
    create() {
        this.velo;
        this.scene.launch('SceneVida');
        this.halberd = this.physics.add.image(350,200,'halberd');
        this.halberd.setDepth(3);
        this.halberd.setScale(1.2);
        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.cursor= this.input.keyboard.createCursorKeys();
              //SOLDADOS
  

        this.coaxoch = this.physics.add.sprite(350,200, 'coaxoch');
        this.coaxoch.setDepth(1);
        this.coaxoch.setScale(1.5);
     
        this.coaxoch.anims.play('coaxoch_static_walk');
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.coaxoch.body.setSize(37.5,49);
        this.coaxoch.body.setOffset(4,2);
        //SOLDADOS
  
        let audio = this.sound.add('musica',{loop:true});
        this.Fondo = this.add.image(2700, 320, "Nivel_2"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.2);
        this.cameras.main.setBounds(0,0,4500,760);
        this.cameras.main.startFollow(this.coaxoch);
        audio.play();

       // this.tierra1 = this.add.image(1290,600, "tierra");
       //GRUPO SOLDADO
        this.grupoSoldado=this.physics.add.group({
            key: 'soldado',
            repeat:0,
            setXY:{
                x: 1100,
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
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 100,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 1950,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 1750,
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
                    x: 1200,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 2500,
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
                    x: 3400,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.createMultiple({
                key: 'soldado',
                repeat:0,
                setXY:{
                    x: 3500,
                    y: 200,
                    stepX:64
                }
            });
            this.grupoSoldado.getChildren()[1].setScale(1.5);
            this.grupoSoldado.getChildren()[1].body.setSize(34,38);
            this.grupoSoldado.getChildren()[1].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[2].setScale(1.5);
            this.grupoSoldado.getChildren()[2].body.setSize(34,38);
            this.grupoSoldado.getChildren()[2].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[3].setScale(1.5);
            this.grupoSoldado.getChildren()[3].body.setSize(34,38);
            this.grupoSoldado.getChildren()[3].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[4].setScale(1.5);
            this.grupoSoldado.getChildren()[4].body.setSize(34,38);
            this.grupoSoldado.getChildren()[4].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[5].setScale(1.5);
            this.grupoSoldado.getChildren()[5].body.setSize(34,38);
            this.grupoSoldado.getChildren()[5].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[6].setScale(1.5);
            this.grupoSoldado.getChildren()[6].body.setSize(34,38);
            this.grupoSoldado.getChildren()[6].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[7].setScale(1.5);
            this.grupoSoldado.getChildren()[7].body.setSize(34,38);
            this.grupoSoldado.getChildren()[7].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[8].setScale(1.5);
            this.grupoSoldado.getChildren()[8].body.setSize(34,38);
            this.grupoSoldado.getChildren()[8].body.setOffset(17,15);
            this.grupoSoldado.getChildren()[9].setScale(1.5);
            this.grupoSoldado.getChildren()[9].body.setSize(34,38);
            this.grupoSoldado.getChildren()[9].body.setOffset(17,15);
           

        this.grupo=this.physics.add.staticGroup({
            key:'tierra',
            repeat:90,
            setXY:{
                x:31,
                y:684,
                stepX:64
            }
        });
         this.grupo.children.iterate((tierra)=>{
             tierra.setDepth(1);

        }   );
        //piso1
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1290,
                y:610,
                stepX:44.8
        }});
        //piso2
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:1400,
                y:500,
                stepX:44.8
        }});
        //piso3
        this.grupo.createMultiple({
            key:'tierra',
            repeat:0,
            setXY:{
                x:650,
                y:400,
                stepX:44.8
        }});
        //piso4
        this.grupo.createMultiple({
            key:'tierra',
            repeat:0,
            setXY:{
                x:650,
                y:400,
                stepX:44.8
        }});
        //piso5
        this.grupo.createMultiple({
            key:'tierra',
            repeat:1,
            setXY:{
                x:450,
                y:400,
                stepX:44.8
        }});
        //grupo6
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
                x:1550,
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
            repeat:0,
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
                x:2100,
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
        
        this.grupo.getChildren()[91].setScale(.7);
        this.grupo.getChildren()[92].setScale(.7);
        this.grupo.getChildren()[91].body.setSize(44,44);
        this.grupo.getChildren()[91].body.setOffset(10,10);
        this.grupo.getChildren()[92].body.setSize(44,44);
        this.grupo.getChildren()[92].body.setOffset(10,10);
        //piso2
        this.grupo.getChildren()[93].setScale(.7);
        this.grupo.getChildren()[94].setScale(.7);
        this.grupo.getChildren()[93].body.setSize(44,44);
        this.grupo.getChildren()[93].body.setOffset(10,10);
        this.grupo.getChildren()[94].body.setSize(44,44);
        this.grupo.getChildren()[94].body.setOffset(10,10);
//piso4
        this.grupo.getChildren()[95].setScale(.7);
        this.grupo.getChildren()[95].body.setSize(44,44);
        this.grupo.getChildren()[95].body.setOffset(10,10);

//piso5
        this.grupo.getChildren()[96].setScale(.7);
        this.grupo.getChildren()[97].setScale(.7);
        this.grupo.getChildren()[98].setScale(.7);
        this.grupo.getChildren()[96].body.setSize(44,44);
        this.grupo.getChildren()[96].body.setOffset(10,10);
        this.grupo.getChildren()[97].body.setSize(44,44);
        this.grupo.getChildren()[97].body.setOffset(10,10);
        this.grupo.getChildren()[98].body.setSize(44,44);
        this.grupo.getChildren()[98].body.setOffset(10,10);
 

//piso6
        this.grupo.getChildren()[99].setScale(.7);
        this.grupo.getChildren()[100].setScale(.7);
        this.grupo.getChildren()[101].setScale(.7);
        this.grupo.getChildren()[99].body.setSize(44,44);
        this.grupo.getChildren()[99].body.setOffset(10,10);
        this.grupo.getChildren()[100].body.setSize(44,44);
        this.grupo.getChildren()[100].body.setOffset(10,10);
        this.grupo.getChildren()[101].body.setSize(44,44);
        this.grupo.getChildren()[101].body.setOffset(10,10);
//piso7
        this.grupo.getChildren()[102].setScale(.7);
        this.grupo.getChildren()[103].setScale(.7);
        this.grupo.getChildren()[104].setScale(.7);
        this.grupo.getChildren()[102].body.setSize(44,44);
        this.grupo.getChildren()[102].body.setOffset(10,10);
        this.grupo.getChildren()[103].body.setSize(44,44);
        this.grupo.getChildren()[103].body.setOffset(10,10);
        this.grupo.getChildren()[104].body.setSize(44,44);
        this.grupo.getChildren()[104].body.setOffset(10,10);
//piso8
        this.grupo.getChildren()[105].setScale(.7);
        this.grupo.getChildren()[106].setScale(.7);
        this.grupo.getChildren()[105].body.setSize(44,44);
        this.grupo.getChildren()[105].body.setOffset(10,10);
        this.grupo.getChildren()[106].body.setSize(44,44);
        this.grupo.getChildren()[106].body.setOffset(10,10);
//piso9
        this.grupo.getChildren()[107].setScale(.7);
        this.grupo.getChildren()[108].setScale(.7);
        this.grupo.getChildren()[109].setScale(.7);
        this.grupo.getChildren()[110].setScale(.7);
        this.grupo.getChildren()[107].body.setSize(44,44);
        this.grupo.getChildren()[107].body.setOffset(10,10);
        this.grupo.getChildren()[108].body.setSize(44,44);
        this.grupo.getChildren()[108].body.setOffset(10,10);
        this.grupo.getChildren()[109].body.setSize(44,44);
        this.grupo.getChildren()[109].body.setOffset(10,10);
        this.grupo.getChildren()[110].body.setSize(44,44);
        this.grupo.getChildren()[110].body.setOffset(10,10);
//piso10
        this.grupo.getChildren()[111].setScale(.7);
        this.grupo.getChildren()[111].body.setSize(44,44);
        this.grupo.getChildren()[111].body.setOffset(10,10);
//piso11
        this.grupo.getChildren()[112].setScale(.7);
        this.grupo.getChildren()[112].body.setSize(44,44);
        this.grupo.getChildren()[112].body.setOffset(10,10);
        this.grupo.getChildren()[113].setScale(.7);
        this.grupo.getChildren()[113].body.setSize(44,44);
        this.grupo.getChildren()[113].body.setOffset(10,10);
//piso12
        this.grupo.getChildren()[114].setScale(.7);
        this.grupo.getChildren()[114].body.setSize(44,44);
        this.grupo.getChildren()[114].body.setOffset(10,10);
        this.grupo.getChildren()[115].setScale(.7);
        this.grupo.getChildren()[115].body.setSize(44,44);
        this.grupo.getChildren()[115].body.setOffset(10,10);
        this.grupo.getChildren()[116].setScale(.7);
        this.grupo.getChildren()[116].body.setSize(44,44);
        this.grupo.getChildren()[116].body.setOffset(10,10);
        this.grupo.getChildren()[117].setScale(.7);
        this.grupo.getChildren()[117].body.setSize(44,44);
        this.grupo.getChildren()[117].body.setOffset(10,10);
//piso13
        this.grupo.getChildren()[118].setScale(.7);
        this.grupo.getChildren()[118].body.setSize(44,44);
        this.grupo.getChildren()[118].body.setOffset(10,10);
        this.grupo.getChildren()[119].setScale(.7);
        this.grupo.getChildren()[119].body.setSize(44,44);
        this.grupo.getChildren()[119].body.setOffset(10,10);
        this.grupo.getChildren()[120].setScale(.7);
        this.grupo.getChildren()[120].body.setSize(44,44);
        this.grupo.getChildren()[120].body.setOffset(10,10);

//piso14
        
        this.grupo.getChildren()[121].setScale(.7);
        this.grupo.getChildren()[121].body.setSize(44,44);
        this.grupo.getChildren()[121].body.setOffset(10,10);
        this.grupo.getChildren()[122].setScale(.7);
        this.grupo.getChildren()[122].body.setSize(44,44);
        this.grupo.getChildren()[122].body.setOffset(10,10);

        //piso15
        this.grupo.getChildren()[123].setScale(.7);
        this.grupo.getChildren()[123].body.setSize(44,44);
        this.grupo.getChildren()[123].body.setOffset(10,10);
        this.grupo.getChildren()[124].setScale(.7);
        this.grupo.getChildren()[124].body.setSize(44,44);
        this.grupo.getChildren()[124].body.setOffset(10,10);
        this.grupo.getChildren()[125].setScale(.7);
        this.grupo.getChildren()[125].body.setSize(44,44);
        this.grupo.getChildren()[125].body.setOffset(10,10);


        //piso16
        this.grupo.getChildren()[126].setScale(.7);
        this.grupo.getChildren()[126].body.setSize(44,44);
        this.grupo.getChildren()[126].body.setOffset(10,10);
        this.grupo.getChildren()[127].setScale(.7);
        this.grupo.getChildren()[127].body.setSize(44,44);
        this.grupo.getChildren()[127].body.setOffset(10,10);
        this.grupo.getChildren()[128].setScale(.7);
        this.grupo.getChildren()[128].body.setSize(44,44);
        this.grupo.getChildren()[128].body.setOffset(10,10);


         //piso17
         this.grupo.getChildren()[129].setScale(.7);
         this.grupo.getChildren()[129].body.setSize(44,44);
         this.grupo.getChildren()[129].body.setOffset(10,10);
         this.grupo.getChildren()[130].setScale(.7);
         this.grupo.getChildren()[130].body.setSize(44,44);
         this.grupo.getChildren()[130].body.setOffset(10,10);
         this.grupo.getChildren()[131].setScale(.7);
         this.grupo.getChildren()[131].body.setSize(44,44);
         this.grupo.getChildren()[131].body.setOffset(10,10);
         this.grupo.getChildren()[132].setScale(.7);
         this.grupo.getChildren()[132].body.setSize(44,44);
         this.grupo.getChildren()[132].body.setOffset(10,10);

          //piso18
        this.grupo.getChildren()[133].setScale(.7);
        this.grupo.getChildren()[133].body.setSize(44,44);
        this.grupo.getChildren()[133].body.setOffset(10,10);
        this.grupo.getChildren()[134].setScale(.7);
        this.grupo.getChildren()[134].body.setSize(44,44);
        this.grupo.getChildren()[134].body.setOffset(10,10);

        //this.grupo.add(this.tierra1);

        this.grupo2=this.physics.add.staticGroup({
            key:'tierra_b',
            repeat:90,
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
       // this.grupoSoldado.setBounce(.1);
        this.coaxoch.setBounce(.1);
        this.enemi1= this.physics.add.collider(this.coaxoch, this.grupoSoldado, (coaxoch, grupoSoldado)=>{
           
            coaxoch.setTint(0xff0000);
           

            if(grupoSoldado.body.touching.left){
                coaxoch.setVelocityY(-100);
                coaxoch.setVelocityX(1000);
                grupoSoldado.setVelocityX(1000);
            }
            if(grupoSoldado.body.touching.right)
            {
                coaxoch.setVelocityY(-100);
                coaxoch.setVelocityX(1000000);
                grupoSoldado.setVelocityX(-1000);
            }
            this.registry.events.emit('evento',{num:1, cancion:audio});
            this.enemi1.active =false;               
             setTimeout(() => {
                coaxoch.setTint();
                this.enemi1.active =true;
                grupoSoldado.setVelocityX(0);
                coaxoch.setVelocityX(0); 
            }, 150);
            
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
            this.flechas.getChildren()[contf].body.enable = false;
            
            if(!coaxoch.body.touching.down)
            {
                this.coaxoch.setVelocityY(90);
            }
            else{
                this.coaxoch.setVelocityY(-90);
            }
            this.flechas.getChildren()[contf].destroy();
            coaxoch.setTint(0xff0000);              
             setTimeout(() => {
                coaxoch.setTint();
            }, 150);
            

        });
       
        this.physics.add.collider(this.grupo, this.flechas, (grupo, flechas)=>{
            this.flechas.getChildren()[contf].body.enable = false;
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
        this.physics.add.collider(this.halberd,this.grupo);
        this.physics.add.collider(this.grupoSoldado,this.grupo);
        this.physics.add.collider(this.coaxoch,this.halberd,(coaxoch,halberd) => {
        
        });
      
    
        this.physics.add.collider(this.grupoSoldado,this.tierraPiso4);





                   
        // Fin Seccion Fisicas


    }
    update(time, delta) {

     if (this.cursor.space.isDown)
     { 
        this.tweens = this.add.tween({
            targets: [this.halberd],
            angle: 70,
            yoyo: true,
             duration: 50,
            });
     }
     if (this.cursor.space.isUp)
     {
        this.tweens = this.add.tween({
            targets: [this.halberd],
            angle: 0,
             duration: 0,
            });
     }
    if (this.cursor.left.isDown)
    {
        this.coaxoch.setVelocityX(-200);
        this.coaxoch.flipX=true;
        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(10,2);

    }
    else if (this.cursor.right.isDown)
    {
        this.coaxoch.setVelocityX(200);
        this.coaxoch.flipX=false;
        this.coaxoch.anims.play('coaxorun_walk',true);
        this.coaxoch.body.setOffset(4,2);

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
    }

}

export default Nivel_2;