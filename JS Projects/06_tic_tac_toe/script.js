// the whole code is written by ai  

class TicTacToe {
    constructor() {
        // 1. Initial Game State (Memory)
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.isGameActive = true;

        // 2. DOM Elements Selection
        this.status = document.getElementById("status");
        this.resetBtn = document.getElementById("reset-btn");
        this.grid = document.querySelector(".grid-cols-3"); // Selecting the container
        this.cells = document.querySelectorAll(".cell");

        // 3. Winning Combinations
        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [6, 4, 2]             // Diagonals
        ];

        // 4. Event Listeners (Using Bind to keep the connection)
        this.grid.addEventListener("click", this.handleCellClick.bind(this));
        this.resetBtn.addEventListener("click", this.resetGame.bind(this));
    }

    // Is method se click handle hoga
    handleCellClick(event) {
        const clickedCell = event.target;
        
        // Agar cell click nahi hua (gap click hua) ya game over hai, toh return kar jao
        if (!clickedCell.classList.contains("cell") || !this.isGameActive) return;

        const cellIndex = clickedCell.getAttribute("data-index");

        // Agar cell pehle se bhara hai, toh kuch mat karo
        if (this.board[cellIndex] !== "") return;

        // Move update karo
        this.updateCell(clickedCell, cellIndex);
        this.checkForWinner();
    }

    updateCell(cell, index) {
        this.board[index] = this.currentPlayer;
        cell.innerText = this.currentPlayer;
        
        // Styling for X and O
        cell.classList.add(this.currentPlayer === "X" ? "text-cyan-400" : "text-yellow-400");
    }

    swapPlayer() {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.status.innerHTML = `Player <span class="text-cyan-400">${this.currentPlayer}</span>'s Turn`;
    }

    checkForWinner() {
        let roundWon = false;

        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            this.status.innerHTML = `<span class="text-green-400">Player ${this.currentPlayer} Wins!</span>`;
            this.isGameActive = false;
            return;
        }

        // Check for Draw
        if (!this.board.includes("")) {
            this.status.innerText = "Game Draw!";
            this.isGameActive = false;
            return;
        }

        this.swapPlayer();
    }

    resetGame() {
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.isGameActive = true;
        this.status.innerHTML = `Player <span class="text-cyan-400">X</span>'s Turn`;
        
        this.cells.forEach(cell => {
            cell.innerText = "";
            cell.classList.remove("text-cyan-400", "text-yellow-400");
        });
    }
}

// Game ko initialize karne ke liye
const game = new TicTacToe();