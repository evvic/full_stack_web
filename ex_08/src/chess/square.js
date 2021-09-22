import React, { useState } from 'react'
import './board.css'

function Square(props) {
    const [color, setColor] = useState(props.isWhite)

    return(
        <div className={(color === 'white')? "white-square" : "black-square"}
            onClick={() =>  setColor((color === "white")? "black" : "white")}
        />
    )
}
export default Square;