
import Nivel_2 from "./Nivel_2.js";
import Inicio from "./Inicio.js";
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
        this.scene.add('Inicio',Inicio);        
    }
    create() {
        this.scene.start('Inicio');
     this.registry.events.on('reinicia',()=>{
        this.registry.events.removeAllListeners();
        this.scene.remove('Nivel_2');
        this.scene.remove('SceneVida');
        this.scene.start('Inicio');
       });
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;