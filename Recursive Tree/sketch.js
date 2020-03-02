let theta;
let lineHeightBeg;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);

    lineHeightBeg = 250;

    

    let a = (mouseX / width) * 90;
    theta = radians(a);
    stroke(255,a*2,a*3);

    translate(width/2, height);
    line(0,0,0,-lineHeightBeg);
    translate(0,-lineHeightBeg);
    
    branch(lineHeightBeg);
}

function branch(h) {
    h *= 0.66;

    if (h>2) {
        push();
        rotate(theta);
        line(0,0,0,-h);
        translate(0,-h);
        branch(h);
        pop();

        push();
        rotate(-theta);
        line(0, 0, 0, -h);
        translate(0, -h);
        branch(h);
        pop();
    }
}