/* selectors for grid size slider */
const gridDimensions = document.querySelector("#grid-dimensions");
const gridSize = document.querySelector("#grid-slider");

/* displays default grid dimensions above slider on load */
gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;

/* updates grid dimensions above slider */
const addGridSize = function () {
  gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;
};

gridSize.addEventListener("input", addGridSize);

/* Adds grid to board */
function createGrid(value) {
  let board = document.querySelector("#board");
  for (let i = 0; i < value; i++) {
    let column = document.createElement("div");
    column.className = "grid-column";
    for (let j = 1; j <= value; j++) {
      let square = document.createElement("div");
      square.className = "grid-square";
      square.style.setProperty(
        "width",
        `calc(${board.clientWidth}px / ${value})`
      );
      square.style.setProperty(
        "height",
        `calc(${board.clientHeight}px / ${value})`
      );
      column.appendChild(square);
    }
    board.appendChild(column);
  }
}

gridSize.addEventListener("input", createGrid(gridSize.value));
