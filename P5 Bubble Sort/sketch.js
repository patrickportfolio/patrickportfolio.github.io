let linesToSort = [];
let sorted = true;
let misplaced = 1;
let passes = 0;

let screenWidth = 1280;
let howMany = 100;
let nowSort = false;

let newButton;
let newInput;
let information;

function setup(){
    createCanvas(windowWidth, windowHeight);

    newInput = createInput();
    newInput.position(20,35);

    newButton = createButton('sort');
    newButton.position(newInput.x + newInput.width, 35);
    newButton.mousePressed(doSort);

    information = createElement('h3', 'Bubble sort visualisation.');
    information.position(20, 10);
    information.style('color: white');
}

function draw(){
    background('black');
    if(nowSort) {
        if (sorted) {
            let sortingColor;
            let randomHeight;
            let tempPosition = 0;
            
            for(let i=0; i<howMany; i++)
            {

                randomHeight = random(0,windowHeight);
                console.log(randomHeight);
                sortingColor = chooseColor(randomHeight);
                
                linesToSort[i] = new lineToSort((windowWidth/howMany)*i, randomHeight, sortingColor);
            }
            sorted = false;
        }

        if (sort == true)
        {
            for (let i=0; i<linesToSort.length - 1; i++){
                    
                if (linesToSort[i].y < linesToSort[i + 1].y) {
                    let temporary = linesToSort[i].y;
                    linesToSort[i].y = linesToSort[i + 1].y;
                    linesToSort[i+1].y = temporary;

                    let temporaryColor = linesToSort[i].color;
                    linesToSort[i].color = linesToSort[i + 1].color;
                    linesToSort[i+1].color = temporaryColor;

                    misplaced++;
                }
            }
        }

        for (let j=0; j<linesToSort.length; j++){
            linesToSort[j].display();
        }
    }
}

class lineToSort {
    constructor(position, height, newColor) {
        this.x = position;
        this.y = height;
        this.color = newColor;
    }

    display() {
        line(this.x, this.y, this.x, windowHeight);
        stroke(this.color);
    }
}

function keyPressed(){
    sort = true;
}

function doSort(){
    howMany = int(newInput.value());
    sorted = true;
    nowSort = true;
    linesToSort.splice(0);
}

function chooseColor(tempHeight) {
    let tempColor;
    if (tempHeight < windowHeight/10)
        tempColor = color('#B9FF0D');
    else if (tempHeight < (windowHeight/10)*2)
        tempColor = color('#E3FF0D');
    else if (tempHeight < (windowHeight/10)*3)
        tempColor = color('#FFFB00');
    else if (tempHeight < (windowHeight/10)*4)
        tempColor = color('#FFEF0D');
    else if (tempHeight < (windowHeight/10)*5)
        tempColor = color('#FFE30F');
    else if (tempHeight < (windowHeight/10)*6)
        tempColor = color('#FFC20A');
    else if (tempHeight < (windowHeight/10)*7)
        tempColor = color('#FFBA0D');
    else if (tempHeight < (windowHeight/10)*8)
        tempColor = color('#FFAE00');
    else if (tempHeight < (windowHeight/10)*9)
        tempColor = color('#FFA90A');
    else if (tempHeight < windowHeight)
        tempColor = color('#FFA30F');
    else
        tempColor = color(255);
    return tempColor;
}