let values = [];
let w = 100;
let beginSort = false;

let newInput;
let newButton;
let newText;

let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpFields();
  

}

async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
    ]);
}

async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
        }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
        states[i] = -1;
        }
    }

    return pivotIndex;
}

function draw() {
  background(0);

  if (beginSort == true) {
    values = new Array(floor(w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    quickSort(values, 0, values.length - 1);
    beginSort = false;
  }

  for (let i = 0; i < values.length; i++) {
    if (states[i] == 0) {
      stroke('#E0777D');
    } else if (states[i] == 1) {
      stroke('#D6FFB7');
    } else {
      stroke(255);
    }
    line((width/w)*i, height - values[i], (width/w)*i, windowHeight);
  }
}

async function swap(arr, a, b) {
        await sleep(1)
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setUpFields() {
    newInput = createInput();
    newInput.position(25, 45);

    newButton = createButton('Sort');
    newButton.position(newInput.x + newInput.width, 45);
    newButton.mousePressed(doSort);

    newText = createElement('h3', 'Quick sort visualisation.');
    newText.position(25, 15);
    newText.style('color: white');
}

function doSort() {
    w = newInput.value();
    console.log(w);
    beginSort = true;
}