//sets width of sketch pad grid
const gridWidth = 300;

//This multiplier increases the sketch pad resolution.  
const resMultiplier = 16;

//This number should be from 1-10.  
//It is squared and multiplied by a coefficient to set the resolution of the sketch pad.
let gridSquares = 1; 

//This is used for resolution increment-btn controls.
let resCounter = 1;

let selectedColor = 'red';

function makeGridCols(){
    let colCount = Math.sqrt(gridSquares);
        for(i = 0; i < colCount; i++){
            let container = document.querySelector('#etch-container');
            let col = document.createElement('div');
            col.setAttribute('class', 'etch-col');
            container.appendChild(col);
        };
};


function makeGridSquares (){
    const cols = document.querySelectorAll('.etch-col');
    const squareCount = gridSquares/cols.length;
    for (i =0; i < cols.length; i++){
        for (j=0; j < squareCount; j++){
            let col = cols[i];
            let square = document.createElement('div');
            square.setAttribute('class', 'etch-square');
            square.style.width = (gridWidth/gridSquares)*squareCount + 'px';
            square.style.height = (gridWidth/gridSquares)*squareCount + 'px';
            //square.addEventListener("mouseover", function() {
            //    this.style.backgroundColor = "black";});
            square.addEventListener("mouseover", startColor)
            col.append(square);

        };

    };
};

function eraseGrid(){
    const cols = document.querySelectorAll('.etch-col');
    const squares = document.querySelectorAll('.etch-square');
    for (i=0; i < cols.length; i++){
        for (j=0; j < squares.length; j++){
            squares[j].style.backgroundColor = 'white'
        };
    };
};

function removeGrid(){
    const cols = document.querySelectorAll('.etch-col');
    for (i=0; i < cols.length; i++){
        cols[i].remove();
    };
};

function setGridSize(userValue){
    let gridRes = userValue**2;
    if (userValue > 0 && userValue <= 10){
        gridSquares = gridRes*resMultiplier;
    } else {
        console.log('ERROR: Input value out of range')
    };
};

function changeGridRes(){
    removeGrid();
    main(gridSquares);

};

function incGridRes(){
    let incTest = resCounter + 1; 
    if (incTest <=10){
        gridSquares = incTest;
        resCounter = resCounter + 1;
        changeGridRes();
    } else {
        resCounter = resCounter;
    };
};

function decGridRes(){
    let incTest = resCounter - 1; 
    if (incTest > 0){
        gridSquares = incTest;
        resCounter = resCounter - 1;
        changeGridRes();
    } else {
        resCounter = resCounter;
    };
};

function displayRes(){
    const display = document.querySelector('#res-display');
    display.textContent = `${gridSquares}x${gridSquares}`
};

function changeListenerColors(){
    squares = document.querySelectorAll('.etch-square')
    for (i = 0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', changeColor)
    };
};

function startColor(){
    this.style.backgroundColor = 'black';
};

function changeColor(){
    this.style.backgroundColor = selectedColor;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  

function randomColor(){
    let randomColor = '';
    let randomArr = [];
    for (i = 0; i < 3; i++){
        randomArr.push(getRandomInt(0,255))
    };
    randomColor = `rgb(${randomArr[0]},
                        ${randomArr[1]},
                        ${randomArr[2]})`;
    return randomColor;
}

function grayShading(){
    let shading = 'rgba(0,0,0,0.1)'; 
    // do things and return a string for setSelectedColor()
    return shading;
};

function setSelectedColor(inputValue){
    return selectedColor = inputValue; 
};

function toggleColorMode(selColInput){
    setSelectedColor(selColInput);
    changeListenerColors();
};



function main(selectedGridSize){
    const container = document.getElementById('etch-container');
    container.style.padding = '10px';
    container.style.width = gridWidth + 'px';
    container.style.height = gridWidth + 'px';
    setGridSize(selectedGridSize);
    makeGridCols();
    makeGridSquares();
    displayRes();
};






