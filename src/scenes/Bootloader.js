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
        this.load.path = "./assets/";          
    }
    create() {
        this.scene.start('Inicio');
        this.registry.events.on('reinicia',()=>{
        this.scene.stop('Nivel_2');
        this.scene.stop('Nivel_1');
        this.registry.events.removeAllListeners();
        this.scene.stop('SceneVidas');
        this.scene.stop('SceneVidas2');

        this.scene.start('Inicio');
       });
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;