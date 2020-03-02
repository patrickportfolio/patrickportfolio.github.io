let newInput;
let newButton;
let newText;

let arr = [];
let arrY = [];
let sort = false;
let sorted = false;
let howMany = 500;
let scoringArr = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    setUpFields();
    frameRate(60);
}

function draw() {
    background('black');

    if (sort){
        let tempPositionArr = 0;
        let found = false;
        if (scoringArr < arrY.length) {
            tempPositionArr = 0;
            found = false;
                for(let j=scoringArr-1; j>=0;j--){
                    if(arrY[scoringArr]>arrY[j]){ //CHANGE > to < for different visualisations
                            tempPositionArr = j;
                            found = true;
                        } 
                }
                if (found == true) {
                        let tempArr = arrY[scoringArr];
                        //arr[i].y = arr[tempPositionArr].y;
                        //arr[tempPositionArr].y = tempArr;
                        arrY.splice(scoringArr, 1);
                        arrY.splice(tempPositionArr, 0, tempArr);
                }
                scoringArr++;
            }    
    }
        for (let i=0; i<arrY.length;i++){
            line((windowWidth/howMany)*i,arrY[i],(windowWidth/howMany)*i,windowHeight);
            stroke(255);
    }
    
}

function setUpFields() {
    newInput = createInput();
    newInput.position(25, 45);

    newButton = createButton('Sort');
    newButton.position(newInput.x + newInput.width, 45);
    newButton.mousePressed(doSort);

    newText = createElement('h3', 'Insertion sort visualisation.');
    newText.position(25, 15);
    newText.style('color: white');
}

function doSort() {
    let randomHeight;
    arrY.splice(0);
    scoringArr = 1;
    howMany = newInput.value();
        for (let i=0; i<howMany; i++){
            randomHeight = random(0, windowHeight);
            arrY[i] = randomHeight;
        }
        if(howMany > 0)
            sort = true;
}
