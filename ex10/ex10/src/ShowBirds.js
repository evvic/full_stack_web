import React, { useState, useEffect  } from 'react'
import axios from 'axios'

async function GetBirds() {
    const url = 'http://localhost:3010/birds'
    const data = await axios.get(url)
    return data
}


function ShowBirds() {
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const [bird_items, setBirdList] = useState([])
    const [filter, setFilter] = useState("")

    async function Filter(spec = "") {
        // if no species filter is given: show all
        if(spec === "") {
            // map data to list of props
            setBirdList(data.map((b) => <li key={b.id}>{b.species}, in {b.observed.location}</li>))
        }
        else {
            //filter by spec
            let filtered = data.filter((event) => {
                //console.log(event.species)
                if(event.species.includes(spec.toLowerCase()))
                    return event.species
            })

            setBirdList(filtered.map((b) => <li key={b.id}>{b.species}, in {b.observed.location}</li>))
        }
    }

    async function Loading() {
        setLoading(true)
        
        let temp = await GetBirds()
        let birds = temp.data

        console.log(birds)

        // make sure temp is not null
        if(birds) {
            setData(birds)
            setLoading(false)

            await Filter()

        }
        else {
            setData([{"name": "error"}])
        }
    }    

    useEffect(() => {
        Loading()
    }, [])

    return (
        <>
        {(loading)? 
            <>
                {/*List of birds is loading*/}
                <h3>loading birds...</h3>
            </>
            : 
            <>
                {/*List of birds is done loading*/}
                <h3>loaded</h3>
                <label>
                    Filter by species:
                    <textarea value={filter} onChange={(c) => {
                        setFilter(c.target.value)
                        //console.log("filter " + filter )
                        Filter(filter)
                        }} />
                </label>
                
                {bird_items}
            </>
        }
        </>
        
    );
}

export default ShowBirds;