document.getElementById('submit').addEventListener('click', () => {
    const player1 = document.getElementById('player-1').value.trim();
    const player2 = document.getElementById('player-2').value.trim();

    if (!player1 || !player2) {
        alert('Please enter names for both players!');
        return;
    }

    document.getElementById('input-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';

    startGame(player1, player2);
});

function startGame(player1, player2) {
    const board = document.getElementById('board');
    const message = document.getElementById('turn-message');
    let currentPlayer = player1;
    let currentMark = 'X';
    const cells = Array(9).fill(null);

    message.textContent = `${currentPlayer}, you're up!`;

    // Generate board cells
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.id = i + 1;
        cell.addEventListener('click', () => {
            if (!cells[i]) {
                cells[i] = currentMark;
                cell.textContent = currentMark;

                if (checkWinner(cells)) {
                    message.textContent = `${currentPlayer}, congratulations you won!`;
                    board.childNodes.forEach(cell => cell.style.pointerEvents = 'none'); // Disable further moves
                } else if (cells.every(mark => mark)) {
                    message.textContent = 'It\'s a draw!';
                } else {
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    currentMark = currentMark === 'X' ? 'O' : 'X';
                    message.textContent = `${currentPlayer}, you're up!`;
                }
            }
        });
        board.appendChild(cell);
    }
}

function checkWinner(cells) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winPatterns.some(pattern =>
        cells[pattern[0]] &&
        cells[pattern[0]] === cells[pattern[1]] &&
        cells[pattern[1]] === cells[pattern[2]]
    );
}