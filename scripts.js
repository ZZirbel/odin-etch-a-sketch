/* Adds changing text for grid sizing */
const gridDimensions = document.querySelector("#grid-dimensions");
const gridSize = document.querySelector("#grid-slider");

gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;

const addGridSize = function () {
  gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;
};

gridSize.addEventListener("input", addGridSize);

const createDivs = function (value) {
  let board = document.querySelector("#board");
  for (let i = 0; i < value; i++) {
    let column = document.createElement("div");
    column.className = "grid-column";
    column.style.setProperty(
      "height",
      `calc(${board.clientHeight} / ${value})`
    );
    for (let j = 1; j <= value; j++) {
      let square = document.createElement("div");
      square.className = "grid-square";
      square.style.setProperty(
        "width",
        `calc(${board.clientWidth} / ${value})`
      );
      column.appendChild(square);
    }
    board.appendChild(column);
  }
};

gridSize.addEventListener("input", createDivs(gridSize.value));
