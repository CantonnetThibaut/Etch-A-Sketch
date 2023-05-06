const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid-button');

function createGrid(numSquares) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', function() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      square.style.backgroundColor = "#" + randomColor;
    });
  }
}

newGridButton.addEventListener('click', function() {
  let numSquares = prompt("Enter the number of squares per side for the new grid (maximum 100):");
  numSquares = parseInt(numSquares);
  if (!isNaN(numSquares) && numSquares > 0 && numSquares <= 100) {
    createGrid(numSquares);
  }
});

createGrid(16);
