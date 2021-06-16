class Shark{
    constructor(){
        this.image = loadImage("s-removebg-preview.png");
    }
    
    display(){
        image(this.image, 500, mouseY, 300, 300);
    }
    }