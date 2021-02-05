const clicks = [];

class Click{
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.size = width/45;
        this.angle = Math.round(random(0, 360));
        this.visible = 255;
    };

    update(){
        if(this.visible > -1){
            this.visible -= 25;
            this.visible--;
        }
    };

    show(){
        push();
        fill(255, 122, 122, this.visible);
        translate(this.x, this.y);
        rotate(this.angle);
        rect(0, 0, this.size);
        pop();
    };
}