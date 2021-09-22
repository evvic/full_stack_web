import React, { useState } from 'react'
import arn from './arnold.png'
import arn2 from './arnold2.jpg'


function Arnold() {
    const [pic, setPic] = useState(1)

    return(
        <div className="arnold">
            <img src={(pic === 1)? arn : arn2} alt="a n absolte monster"/>
            <br/>
            <button onClick={() => setPic((pic === 1)? 2 : 1)}>
                Arnold Schwarzenegger
            </button>
        </div>
    )
}

export default Arnold;