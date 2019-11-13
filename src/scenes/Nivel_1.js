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
        this.load.image(["tierra", "tierra_b"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_1"])
        this.load.path = "./assets/personajes/";            //Ruta Personajes(Inicia aqui cosas de la carpeta Personajes)
        this.load.atlas('Coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        
    }
    create() {
        
        this.coaxoch = this.physics.add.sprite(200,200, 'Coaxoch');
        this.coaxoch.setDepth(1);
        this.grupo=this.physics.add.staticGroup({
            key:'tierra',
            repeat:23,
            setXY:{
                x:31,
                y:684,
                stepX:64
            }
        });
         this.grupo.children.iterate((tierra)=>{
             tierra.setDepth(1);

        }   );

        
        //this.coaxoch.play('coaxorun_walk');
    
       /*for(var i=0; i<=23;i++)
        {
        var y=684;
        this.tierra = this.physics.add.staticGroup();
        this.tierra.create(x, 624, 'tierra').refreshBody();
        this.physics.add.collider(this.coaxoch,this.tierra);
        for(var a=0; a<=2;a++)
        {
            this.tierra2 = this.add.image(x,y,"tierra_b");
            this.tierra2.setDepth(1);
            y+=64;
            
        }
        x+=64;
        this.tierra.setDepth(1); 

        }*/

        this.Fondo = this.add.image(600, 500, "Nivel_1"); 
        this.Fondo.setDepth(0);

        // Sección donde se Agregaran Fisicas

        this.coaxoch.setBounce(.1);
        this.physics.add.collider(this.coaxoch,this.grupo);

        // Fin Seccion Fisicas

    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Nivel_1;