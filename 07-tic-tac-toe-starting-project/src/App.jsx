import {Player} from "./components/players/Player.jsx";
import {GameBoard} from "./components/gameBoard/GameBoard.jsx";

function App() {

    return (
        <main>
            <div id="game-container">
                <h1>React Tic-Tac-Toe</h1>
                    <ol id="players">
                        <Player initialName="Getzels" symbol="X" />
                        <Player initialName="Xavier" symbol="O" />
                    </ol>
                <GameBoard />
            </div>
            LOG
        </main>
    )
}

export default App
