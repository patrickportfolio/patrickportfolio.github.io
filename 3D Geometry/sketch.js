function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight, WEBGL);
  
  }
  
  function draw() {
    background('250');

    translate(0, -200, 0);
    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(100);
    pop();

    translate(-400,0,0);

    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(100,100,100);
    pop();

    translate(800,0,0);

    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(100,75);
    pop();
  
    translate(0,400,0);

    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(100,100);
    pop();

    translate(-400,0,0);

    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    torus(100, 30);
    pop();
    
    translate(-400,0,0)

    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    sphere(100);
    pop();

    // put drawing code here
  }