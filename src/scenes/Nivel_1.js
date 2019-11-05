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
    }
    create() {
        var x=31;
        
        for(var i=0; i<=23;i++)
        {
        var y=684;
        this.tierra = 
        this.add.image(x, 624, "tierra");
        for(var a=0; a<=2;a++)
        {
            this.tierra2 = this.add.image(x,y,"tierra_b");
            this.tierra2.setDepth(1);
            y+=64;
            
        }
        x+=64;
        this.tierra.setDepth(1); 
        }
        this.Fondo = this.add.image(600, 500, "Nivel_1"); 
        this.Fondo.setDepth(0);
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Nivel_1;