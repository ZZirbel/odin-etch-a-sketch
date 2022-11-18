/* Adds changing text for grid sizing */
const gridDimensions = document.querySelector("#grid-dimensions");
const gridSize = document.querySelector("#grid-slider");

gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;

const addGridSize = function () {
  gridDimensions.textContent = `${gridSize.value} x ${gridSize.value}`;
};

gridSize.addEventListener("input", addGridSize);
