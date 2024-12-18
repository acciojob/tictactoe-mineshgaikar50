let player1Name = "";
let player2Name = "";
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll(".cell");

// Event Listener for Submit Button
document.getElementById("submit").addEventListener("click", () => {
  player1Name = document.getElementById("player-1").value || "Player 1";
  player2Name = document.getElementById("player-2").value || "Player 2";

  document.getElementById("input-section").style.display = "none";
  document.getElementById("game-section").style.display = "block";
  document.getElementById("message").textContent = `${player1Name}, you're up`;
});

// Adding Event Listeners to Cells
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.id) - 1;

  if (board[cellIndex] === "") {
    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (checkWin()) {
      const winnerName = currentPlayer === "X" ? player1Name : player2Name;
      document.getElementById("message").textContent = `${winnerName}, congratulations you won!`;
      disableBoard();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const nextPlayerName = currentPlayer === "X" ? player1Name : player2Name;
    document.getElementById("message").textContent = `${nextPlayerName}, you're up`;
  }
}

function checkWin() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
  
    // Check if any win pattern is satisfied
    for (let pattern of winPatterns) {
      if (pattern.every(index => board[index] === currentPlayer)) {
        // Highlight the winning cells
        pattern.forEach(index => {
          document.getElementById(index + 1).classList.add("winning-cell");
        });
        return true; // Return true if there's a win
      }
    }
    return false; // No win yet
  }
  
