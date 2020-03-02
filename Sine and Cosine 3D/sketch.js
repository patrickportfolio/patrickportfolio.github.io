let scrollAmount = -1;
let howMany = 500;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(230);
  
  if (scrollAmount >= 0)
    scrollAmount = -1;

  rotateY((-mouseX+windowWidth/2) * 0.001);
  rotateX((-mouseY+windowHeight/2) * 0.001);
  
  scale(scrollAmount);

  for (let i=0; i<5; i++){
      push();
      for (let j=0; j<howMany;j++){
        translate(
        sin(frameCount * 0.001 + i) * 100,
        sin(frameCount * 0.001 + i) * 100,
        j * 0.1);
        rotateZ(frameCount * 0.002);
        push();
        sphere(8,6,4);
        pop();
      }
    pop();
  }
}
function mouseWheel(event){
    print(event.delta);
    if (scrollAmount < 0)
        scrollAmount += event.delta * 0.01
    else scrollAmount = -1;
}