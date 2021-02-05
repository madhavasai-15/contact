function heading(){
    //Home
    if(mouseX > width/1.21-width/20/2 && mouseX < width/1.21+width/20/2 && mouseY > height/12-height/16/2 && mouseY <  height/12+height/16/2){
      cursor(HAND);
      image(headingImg[1], width/1.13, height/12, width/20*4, height/12);
    }else if(mouseX > width/1.13-width/20/2 && mouseX < width/1.13+width/20/2 && mouseY > height/12-height/16/2 && mouseY < height/12+height/16/2){
      cursor(HAND);
      image(headingImg[2], width/1.13, height/12, width/20*4, height/12);
    }else if(mouseX > width/1.055-width/20/2 && mouseX < width/1.055+width/20/2 && mouseY > height/12-height/16/2 && mouseY <  height/12+height/16/2){
      cursor(HAND);
      image(headingImg[3], width/1.13, height/12, width/20*4, height/12);
    }else {
      image(headingImg[0], width/1.13, height/12, width/20*4, height/12);
    }
    
  };
  
  var square1 = 0;
  var square1_alpha = 105;
  var square2 = 0;
  var square2_alpha = 105;
  var square3 = 360/2;
  var square3_alpha = 105;
  function Rotating_Square(){
    push();
    if(frameCount % 1 === 0){
      square1++;
    }
    fill(255, 122, 122, square1_alpha);
    translate(width/2, height/2);
    rotate(square1);
    rect(0+width/6, 0+height/4, width/40, width/40);
    pop();
  
    push();
    if(frameCount % 1 === 0){
      square2++;
    }
    fill(255, 122, 122, square2_alpha);
    translate(width, height);
    rotate(square2);
    rect(0-width/3.2, 0-height/4+width/40, width/40, width/40);
    pop();
  
    push();
    if(frameCount % 1 === 0){
      square3++;
    }
    fill(255, 122, 122, square3_alpha);
    translate(0, 0);
    rotate(square3);
    rect(0+width/3.5, 0+height/4+width/40, width/40, width/40);
    pop();
  };