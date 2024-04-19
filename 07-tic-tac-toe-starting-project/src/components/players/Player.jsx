import "./player.css"
import {useState} from "react";

export class player {
    static X = "X";
    static O =  "O";
}
export function Player({ initialName, symbol }) {

    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditName = () => setIsEditing(editing => !editing);

    const onChangeName = (event) => setName(event.target.value);

    const playerNameField = isEditing
        ? <input type="text"
                 required
                 className="player-name"
                 placeholder="Enter name"
                 value={name}
                 onChange={onChangeName}/>

        : <span className="player-name">{name}</span>;

    return (
        <span>
            <li>
                <span id="player">
                    {playerNameField}
                    <span id="player-symbol">{symbol}</span>
                    <button onClick={handleEditName}>{isEditing ? "Save" : "Edit"}</button>
                </span>
            </li>
        </span>
    )
}