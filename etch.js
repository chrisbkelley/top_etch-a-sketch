const maxWidth = 300;
let gridSquares = 0; 

function makeGridCols(){
    //creates a grid of divs inside the #container div
    let colCount = Math.sqrt(gridSquares);
        for(i = 0; i < colCount; i++){
            let container = document.querySelector('#container');
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
            square.style.width = (maxWidth/gridSquares)*squareCount + 'px';
            square.style.height = (maxWidth/gridSquares)*squareCount + 'px';
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "black";
            });
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


function main(gridSize){
    const container = document.getElementById('container');
    container.style.padding = '10px';
    container.style.width = maxWidth + 'px';
    container.style.height = maxWidth + 'px';

    if (gridSize > 0 && gridSize <= 100) {
        gridSquares = gridSize*16;
        makeGridCols();
        makeGridSquares();
    } else {
        alert('Choose a size in range 1-100.');
    }
};






