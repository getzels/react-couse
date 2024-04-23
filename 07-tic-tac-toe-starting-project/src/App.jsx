import {player, Player} from "./components/players/Player.jsx";
import {GameBoard} from "./components/gameBoard/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/log/Log.jsx";


function App() {
    const [activePlayer, setActivePlayer] = useState(player.X);
    const [gameTurns, setGameTurns] = useState([]);

    function handlePlayerTurn(rowIndex, columnIndex) {
        setActivePlayer((currentPlayer) =>
            currentPlayer === player.X ? player.O : player.X)

        setGameTurns((currentPlayerTurn) => {
            let activePlayer = player.X;

            if (currentPlayerTurn.length > 0 && currentPlayerTurn[0].player === player.X) {
                activePlayer = player.O;
            }

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

    return (
        <main>
            <div id="game-container">
                <h1>React Tic-Tac-Toe</h1>
                    <ol id="players" className="highlight-player">
                        <Player initialName="Getzels" symbol={player.X} />
                        <Player initialName="Xavier" symbol={player.O} />
                    </ol>
                <GameBoard handlePlayerTurn={handlePlayerTurn} gameTurns={gameTurns}/>
            </div>
            <Log />
        </main>
    )
}
export default App
