import React, { useState } from 'react'

// changing text color on interval
function Swag() {
    const [value, setValue] = useState(0);
    const colors = ["orange", "yellow", "green", "blue", "indigo", "violet"]

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v === colors.length ? 0 : v + 1));
        }, 900);
    }, [])

    return(
        <div>
            <h1 style={{color: colors[value]}}>what's poppin'</h1>
        </div>
    )
}

export default Swag;