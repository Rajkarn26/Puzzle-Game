const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');

let currentPlayer = 'X';
let moves = 0;
let gameOver = false;

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return cells[a].textContent;
    }
  }

  if (moves === 9) {
    return 'draw';
  }

  return null;
}

function handleClick(index) {
  if (!gameOver && !cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    moves++;
    const winner = checkWinner();

    if (winner) {
      if (winner === 'draw') {
        result.textContent = "It's a draw!";
      } else {
        result.textContent = `${winner} wins!`;
      }
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => handleClick(i));
}
