import React from 'react'
import './board.css'
import Square from './square';

function BoardRow(props) {

    var squares = []
    var color = props.isWhite

    for(var i = 0; i < 8; i++) {
        color = (color === "white")? "black" : "white"
        squares[i] = <Square isWhite={color}/>
    }

    return(
        <div className="board-row">
            {squares}
        </div>
    )
}
export default BoardRow;