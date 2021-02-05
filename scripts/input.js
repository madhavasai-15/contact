class Input{
    constructor(x, y, width, height, value){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        this.input = createInput(value);
    };

    show(){
        this.input.position(this.x-this.width/2, this.y-this.height/2);
        this.input.size(this.width, this.height);  
    };
}