const loading = [];
var loading_image = 1;

const headingImg = [];
var state = 'loading';

var nameInput;
var message;

var responseCount;

function preload(){
  for(var i = 1; i < 18; i++){
    if(i < 10){
      loading[i] = loadImage('Images/loading/0' + i + '.png');
    }else {
      loading[i] = loadImage('Images/loading/' + i + '.png');
    }    
  }

  logo1 = loadImage('Images/logo1.png');
  logo2 = loadImage('Images/logo2.png');
  backGround = loadImage('Images/background.png');

  headingImg[0] = loadImage('Images/heading/1.png');
  headingImg[1] = loadImage('Images/heading/2.png');
  headingImg[2] = loadImage('Images/heading/3.png');
  headingImg[3] = loadImage('Images/heading/4.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  nameInput = new Input(width/2, height/3, width/4, height/22, 'Username');
  message = new Input(width/2, height/2, width/4, height/4, 'Message');
  
  database = firebase.database();

  var responseCountRef  = database.ref('responseCount');
  responseCountRef.on("value",function(data){
    responseCount = data.val();
  });

  button = createButton('Send');
};

function draw() {
  background(255);  
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();

  if(state === 'loading'){
    if(frameCount % 3 === 0 && loading_image < 17){
      loading_image++;
    }
    if(frameCount % 60 === 0 && loading_image > 16){
      state = 'home';
    }

    image(loading[loading_image], width/2, height/2);

  }else if(state === 'home'){
    image(backGround, width/2, height/2, width, height);

    fill(255);
    textSize(24);
    
    //logo
    if(mouseX > 0+width/15-width/15/2 && mouseX < 0+width/15+width/15/2 && mouseY > 0+height/8-width/15/2 && mouseY < 0+height/8+width/15/2){
      cursor(HAND);
      image(logo2, 0+width/15, 0+height/8, width/13, width/13);
    }else {
      cursor();
      image(logo1, 0+width/15, 0+height/8, width/15, width/15);
    }

    //heading properties
    heading();
    //rotating squares
    Rotating_Square();

    //clicks animation
    for(var i = 0; i < clicks.length; i++){
      clicks[i].show();
      clicks[i].update();
    }

    nameInput.show();
    message.show();

    button.position(width/2+width/4/3.15, height/2+height/6);
    button.size(width/20, height/20);
    let col = color(255, 255, 255, 255);
    button.style('background-color', col);

    button.mousePressed(function(){
      var playerIndex = "Messages/" + responseCount;
      database.ref(playerIndex).set({
        message: message.input.value(),
        userName: nameInput.input.value()
      }); 
      responseCount++;
      database.ref('/').update({
        responseCount: responseCount
      });
    
      nameInput.input.value('UserName');
      message.input.value('Message');

    }); 

  }
};

function mouseReleased(){
  if(state === 'home'){
    //click animation creation
    clicks.push(new Click());

    //lag prevent
    if(clicks.length > 10){
      clicks = [];
    }

    //clicking on icon
    if(mouseX > 0+width/15-width/15/2 && mouseX < 0+width/15+width/15/2 && mouseY > 0+height/8-width/15/2 && mouseY < 0+height/8+width/15/2){
      window.location.href = 'https://madhavasai-15.github.io/index';
    } 
    
    //clicking on home
    if(mouseX > width/1.21-width/20/2 && mouseX < width/1.21+width/20/2 && mouseY > height/12-height/16/2 && mouseY < height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/index';
    }

    //clicking on games
    if(mouseX > width/1.13-width/20/2 && mouseX < width/1.13+width/20/2 && mouseY > height/12-height/16/2 && mouseY < height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/My-Games/';
    } 

    //clicking on contact
    if(mouseX > width/1.06-width/20/2 && mouseX < width/1.06+width/20/2 && mouseY > height/12-height/16/2 && mouseY <  height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/contact/';
    }
  }
}