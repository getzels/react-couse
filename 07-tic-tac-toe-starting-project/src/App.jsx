import {player, Player} from "./components/players/Player.jsx";
import {GameBoard} from "./components/gameBoard/GameBoard.jsx";
import {useState} from "react";



function App() {
    const [activePlayer, setActivePlayer] = useState(player.X);

    function handlePlayerTurn() {
        setActivePlayer((currentPlayer) =>
            currentPlayer === player.X ? player.O : player.X)
    }

    return (
        <main>
            <div id="game-container">
                <h1>React Tic-Tac-Toe</h1>
                    <ol id="players" className="highlight-player">
                        <Player initialName="Getzels" symbol={player.X} />
                        <Player initialName="Xavier" symbol={player.O} />
                    </ol>
                <GameBoard handlePlayerTurn={() => handlePlayerTurn()} activePlayer={activePlayer}/>
            </div>
            LOG
        </main>
    )
}
export default App
