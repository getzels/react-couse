import {player, Player} from "./components/players/Player.jsx";
import {GameBoard} from "./components/gameBoard/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/log/Log.jsx";
import {WINNING_COMBINATIONS} from "./utils/winning-combinations.js";
import {GameOver} from "./components/gameOver/GameOver.jsx";

function deriveActivePlayer(currentPlayerTurn) {
    let activePlayer = player.X;

    if (currentPlayerTurn.length > 0 && currentPlayerTurn[0].player === player.X) {
        activePlayer = player.O;
    }
    return activePlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    const gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, column} = square;
        gameBoard[row][column] = player;
    }

    let winner;
    const hasDraw = gameTurns.length == 9 && !winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    function handlePlayerTurn(rowIndex, columnIndex) {
        setGameTurns((currentPlayerTurn) => {
            return [
                {
                    square: {
                        row: rowIndex,
                        column: columnIndex
                    },
                    player: activePlayer
                },
                ...currentPlayerTurn
            ];
        });
    }

    function handleRematch() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                {/*<h1 >React Tic-Tac-Toe</h1>*/}
                <ol id="players" className="highlight-player">
                    <Player initialName="Getzels" symbol={player.X} activePlayer={activePlayer}/>
                    <Player initialName="Xavier" symbol={player.O} activePlayer={activePlayer}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={() => handleRematch()}/>}
                <GameBoard handlePlayerTurn={handlePlayerTurn} gameBoard={gameBoard}/>
            </div>
            <Log gameTurns={gameTurns}/>
        </main>
    )
}
export default App
