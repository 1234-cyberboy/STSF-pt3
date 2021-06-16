class Starfish{
    constructor(){
        this.image = loadImage("starfish-removebg-preview.png");
    }
    
    display(){
        image(this.image, mouseX + 200, mouseY, 100, 150);
    }
    }