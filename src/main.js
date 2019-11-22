import Bootloader from "./scenes/Bootloader.js"
import Nivel_1 from "./scenes/Nivel_1.js";
import Nivel_2 from "./scenes/Nivel_2.js";

const config = {
    title: "Curso Phaser",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    width: 1500,			            //Ancho de pantalla del juego
    height: 760, 			        //Alto de pantalla del juego
    parent: "contenedor",		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", 	//Color de fondo del canvas ()
    scene: [Nivel_1,Nivel_2],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
                "#16a085",
                "#2ecc71",
                "#e74c3c", 
                "#000000"]
    },
    physics: {
        default : 'arcade',
        arcade:{
            gravity: {y:500},
            debug : true
        }

    }
};

const game = new Phaser.Game(config);