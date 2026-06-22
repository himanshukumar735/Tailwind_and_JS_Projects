class TicTacToe {
    constructor(parameters) {
        this.status = document.getElementById("status");
        this.grid = document.querySelector(".grid");
        // console.log(this.grid)

        this.cell = document.getElementsByClassName("cell");
        this.resetBtn = document.getElementById("reset-btn");

        this.board = ["", "", "", "", "", "", "", "", ""];
        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],   // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8],   // Vertical
            [0, 4, 8], [2, 4, 6]              // Diagonal
        ];

        this.currentPlayer = "x";
        this.isGameActive = true;

        this.grid.addEventListener("click", this.handleCellClick.bind(this));
        this.resetBtn.addEventListener("click", this.resetGame.bind(this));
    }

    handleCellClick(event) {
        if (!this.isGameActive) {
            alert("game has ended");
            return
        }

        let eventData = event.target;
        // console.log(eventData.data-index);      //In JavaScript, a variable/property name dont contain a hyphen - 
        let cellIndex = eventData.getAttribute("data-index");   // .getAttribute is used to store the value of html attribute

        if (cellIndex) {
            if (this.board[cellIndex] === "") {
                this.updateCell(cellIndex, eventData);
            }
            else {
                alert("already occupied")
            }
        }
    }

    updateCell(cellIndex, eventData) {
        this.board[cellIndex] = this.currentPlayer;
        eventData.innerHTML = this.currentPlayer;

        let winnerFound = this.checkWinner();
        if (!winnerFound) {
            this.swapPlayer();
        }
        this.gameDraw(winnerFound);
    }

    swapPlayer() {
        let newPlayer = this.currentPlayer === "x" ? "o" : "x";
        this.currentPlayer = newPlayer;
        this.status.innerHTML = `Player <span class="text-cyan-400">${this.currentPlayer}</span>'s Turn`
    }

    checkWinner() {
        for (let index = 0; index < this.winningConditions.length; index++) {
            const [a, b, c] = this.winningConditions[index];

            if (this.board[a] != "" && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
                this.status.innerHTML = `Player <span class="text-cyan-400">${this.currentPlayer}</span> Won`
                this.isGameActive = false;
                return true;
            }
        }
        return false;
    }

    gameDraw(winnerFound) {
        if (!this.board.includes("") && !winnerFound) {
            this.status.innerHTML = ` <span class="text-cyan-400">Game Draw</span>`
            this.isGameActive = false;
        }
    }

    resetGame() {
        this.currentPlayer = "x";
        for (let item of this.cell) {
            item.innerHTML = "";
        }

        this.board = ["", "", "", "", "", "", "", "", ""];
        this.status.innerHTML = `Player <span class="text-cyan-400">${this.currentPlayer}</span>'s Turn`
        this.isGameActive = true;
    }
}

const game = new TicTacToe()
