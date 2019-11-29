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
        this.load.path = "./assets/musica/";
        this.load.audio('musica', 'Menu.mp3');


        
    }
    create() {
        let audio = this.sound.add('musica',{loop:true});
        audio.play();
     this.logo= this.add.image(750, 160, "logoMain"); 
     this.logo.setScale(1);
     this.play = this.add.image(730, 650, 'play_button').setInteractive();
     //this.play2 = this.add.image(750, 500, 'play_button2');
     //this.play2.setVisible(false);
     this.coaxo =this.add.image(730, 400, 'coaxoMain');
     this.coaxo.setScale(.35);
    



     this.play.on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.add.tween({
            targets: [this.play, this.logo, this.coaxo],
            ease: 'Bounce.easeIn',
            y: -200,
            duration: 1000,
            onComplete: () => 
            {
                console.log('nepe');

                this.scene.start('Nivel_2');
            }
        });
    });

 
    }
    update(time, delta) {

   
    }
}

export default Inicio;