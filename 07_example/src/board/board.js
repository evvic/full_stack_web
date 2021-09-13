import React from 'react'
import BoardRow from './board-row';
import './board.css'

function Board() {

    var rows = []
    var color = "white"

    for(var i = 0; i < 8; i++) {
        color = (color === "white")? "black" : "white"
        rows[i] = <BoardRow isWhite={color}/>
    }

    return(
        <div className="board">
            {rows}
        </div>
    )
}

export default Board;
