class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Bootloader");
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
    }
    create() {
        //this.yoshi = this.add.image(100, 100, "yoshi"); //atributo
        
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;