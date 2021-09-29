import React, { useState } from 'react'

// changing text color on interval
function Swag() {
    const [value, setValue] = useState(0);
    const colors = ["orange", "yellow", "green", "blue", "indigo", "violet"]

    const [text, setText] = useState(0)
    const texts = ["I lIkE BIrds", "i LiKe BirDs", "i LIek berDs" /*, "i leki birds", "I LIKE BIRDS"*/]

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v === colors.length ? 0 : v + 1));
        }, 900);
        const int = setInterval(() => {
            setText((v) => (v === texts.length ? 0 : v + 1))
        }, 1200);
    }, [])

    return(
        <div>
            <h1 style={{color: colors[value]}}>{texts[1]}</h1>
        </div>
    )
}

export default Swag;