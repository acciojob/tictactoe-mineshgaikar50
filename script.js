// Variables to store player names, current turn, and game state
let player1 = '';
let player2 = '';
let currentPlayer = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Start Game Button Event Listener
document.getElementById('start-game').addEventListener('click', () => {
    const player1Input = document.getElementById('player1').value.trim();
    const player2Input = document.getElementById('player2').value.trim();

    if (!player1Input || !player2Input) {
        alert('Please enter names for both players.');
        return;
    }

    // Initialize player names and current turn
    player1 = player1Input;
    player2 = player2Input;
    currentPlayer = player1;

    // Show the board and clear previous messages
    document.getElementById('board').innerHTML = '';
    document.querySelector('.message').textContent = `${player1}, you're up!`;
    createBoard();
});

// Function to create the Tic Tac Toe board
function createBoard() {
    const board = document.getElementById('board');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(3, 100px)';
    board.style.gridGap = '5px';

    // Reset game state
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Create 9 cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.id = i;
        cell.className = 'cell';
        cell.style.width = '100px';
        cell.style.height = '100px';
        cell.style.border = '1px solid #000';
        cell.style.display = 'flex';
        cell.style.justifyContent = 'center';
        cell.style.alignItems = 'center';
        cell.style.fontSize = '24px';
        cell.style.cursor = 'pointer';
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
}

// Handle Cell Click
function handleCellClick(index) {
    if (!gameActive || gameBoard[index] !== '') return;

    // Mark the cell for the current player
    gameBoard[index] = currentPlayer === player1 ? 'x' : 'o';
    document.getElementById(index).textContent = gameBoard[index];

    // Check for a winner or draw
    if (checkWinner()) {
        document.querySelector('.message').textContent = `${currentPlayer}, congratulations you won!`;
        gameActive = false;
        return;
    }

    if (gameBoard.every(cell => cell !== '')) {
        document.querySelector('.message').textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    // Switch turns
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    document.querySelector('.message').textContent = `${currentPlayer}, you're up!`;
}

// Check for a Winner
function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            gameBoard[a] !== '' &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[b] === gameBoard[c]
        );
    });
}
