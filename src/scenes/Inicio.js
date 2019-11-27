class Inicio extends Phaser.Scene{
    constructor(){
        super({
            key: "Inicio" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Inicio");
    }
    preload() {
        this.load.path = "./assets/Objetos/";               //Ruta de Objetos(Inicia aqui cosas de la carpeta Objetos)
        this.load.image(["logoMain", "play_button", "play_button2"])
        this.load.path = "./assets/personajes/";
        this.load.image(["coaxoMain"])

        
    }
    create() {
     this.logo= this.add.image(750, 200, "logoMain"); 
     this.logo.setScale(1);
     this.play = this.add.image(750, 500, 'play_button');
     this.play2 = this.add.image(750, 500, 'play_button2');
     this.play2.setVisible(false);

     const eventos = Phaser.Input.Events;
     this.play.on(eventos.POINTER_MOVE, (evento) => {
        this.play2.setVisible(true);
        });
        this.play.on(eventos.POINTER_OUT, (evento) => {
            });
 
    }
    update(time, delta) {

   
    }
}

export default Inicio;