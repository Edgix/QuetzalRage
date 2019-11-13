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
        this.load.image(["tierra", "tierra_b","Arrow"]);
        this.load.path = "./assets/escenarios/";            //Ruta Escenarios(Inicia aqui cosas de la carpeta Escenarios)
        this.load.image(["Nivel_1"])
        this.load.path = "./assets/personajes/";            //Ruta Personajes(Inicia aqui cosas de la carpeta Personajes)
        this.load.atlas('Coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        
    }
    create() {
        const keyCodes= Phaser.Input.Keyboard.KeyCodes;
        this.cursor= this.input.keyboard.createCursorKeys();
        this.coaxoch = this.physics.add.sprite(200,200, 'Coaxoch');
        this.coaxoch.setDepth(1);
        this.coaxoch.body.setSize(this.coaxoch.width,this.coaxoch.height,true);
        this.grupo=this.physics.add.staticGroup({
            key:'tierra',
            repeat:46,
            setXY:{
                x:31,
                y:684,
                stepX:64
            }
        });
         this.grupo.children.iterate((tierra)=>{
             tierra.setDepth(1);

        }   );

        this.grupo2=this.physics.add.staticGroup({
            key:'tierra_b',
            repeat:46,
            setXY:{
                x:31,
                y:744,
                stepX:64
            }
        });
         this.grupo2.children.iterate((tierra_b)=>{
             tierra_b.setDepth(1);

        }   );

        this.Fondo = this.add.image(850, 320, "Nivel_1"); 
        this.Fondo.setDepth(0);
        this.Fondo.setScale(1.15);

        // Sección donde se Agregaran Fisicas

        this.coaxoch.setBounce(.1);
        this.physics.add.collider(this.coaxoch,this.grupo);

        // Fin Seccion Fisicas

        

    }
    update(time, delta) {
    
        if (this.cursor.left.isDown)
    {
        this.coaxoch.setVelocityX(-160);
        this.coaxoch.flipX=true;
    }
    else if (this.cursor.right.isDown)
    {
        this.coaxoch.setVelocityX(160);
        this.coaxoch.flipX=false;
    }
    else
    {
        this.coaxoch.setVelocityX(0);
    }

    if (this.cursor.up.isDown && this.coaxoch.body.touching.down)
    {
        this.coaxoch.setVelocityY(-330);
    }
    }
}

export default Nivel_1;