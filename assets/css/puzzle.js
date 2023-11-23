var rows = 5;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let tile = document.createElement("img");
      tile.src = "./images2/blank.jpg";

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart); //click on image to drag
      tile.addEventListener("dragover", dragOver);   //drag an image
      tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
      tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
      tile.addEventListener("drop", dragDrop);       //drop an image onto another one
      tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

      document.getElementById("board").append(tile);
    }
  }


  let pieces = [];
  for (let i=1; i <= rows*columns; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i =0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);

    //swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images2/" + pieces[i] + ".jpg";

    //DRAG FUNCTIONALITY
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    document.getElementById("pieces").append(tile);
  }
}

function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText = turns;
}


window.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    resetGame();
  }
});

function resetGame() {
  turns = 0;
  document.getElementById("turns").innerText = turns;

  const board = document.getElementById("board");
  board.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "./images2/blank.jpg";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      board.append(tile);
    }
  }


  const pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }


  const piecesContainer = document.getElementById("pieces");
  piecesContainer.innerHTML = "";

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images2/" + pieces[i] + ".jpg";

    // Add drag functionality (same as before)
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    piecesContainer.append(tile);
  }
}



