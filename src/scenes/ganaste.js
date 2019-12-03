import SceneVida from "./SceneVida.js";
import Nivel_1 from "./Nivel_1.js";
class ganaste extends Phaser.Scene{
    constructor(){
        super({
            key: "ganaste" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("ganaste prro");
    }
    preload() {
        this.load.path = "./assets/Objetos/";               //Ruta de Objetos(Inicia aqui cosas de la carpeta Objetos)
        this.load.image(["winer"])
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_1"])
        this.load.path = "./assets/personajes/";
        this.load.image(["coaxoMain"])
        this.load.path = "./assets/musica/";
        this.load.audio('musica', 'Menu.mp3');


        
    }
    create() {
        let audios2 = this.sound.add('musica',{loop:true});
        audios2.play();
        this.Fondo = this.add.image(2500, 380, "Nivel_1"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.3);
        //let audio = this.sound.add('musica',{loop:true});
     this.ganar= this.add.image(750, 160, "winer"); 
     this.ganar.setScale(1);
     //this.play2 = this.add.image(750, 500, 'play_button2');
     //this.play2.setVisible(false);
     this.coaxo =this.add.image(730, 400, 'coaxoMain');
     this.coaxo.setScale(.35);
    
    // audio.play();



 
    }
    update(time, delta) {

   
    }
}

export default ganaste;