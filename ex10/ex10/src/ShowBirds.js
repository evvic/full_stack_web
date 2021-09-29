import React, { useState, useEffect, Card } from 'react'
import axios from 'axios'
import './App.css';

async function GetBirds() {
    const url = 'http://localhost:3010/birds'
    const data = await axios.get(url)
    return data.data
}

function ShowBirds() {
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const [bird_items, setBirdList] = useState([])
    const [filter, setFilter] = useState("")

    async function Filter(spec = "") {
        // if no species filter is given: show all
        if(spec === "" || spec === "\n" || spec === " " || spec == "all" || spec == "al") {
            // map data to list of props
            setBirdList(data.map((b) => <li key={b.id}>{b.species}, in {b.observed.location}</li>))
        }
        else {
            //filter by spec
            let filtered = await data.filter((event) => {
                console.log(event.species)
                if(event.species.includes(spec.toLowerCase()))
                    return event.species
            })

            setBirdList(filtered.map((b) => <li key={b.id} className="items">{b.species}, in {b.observed.location}</li>))
        }
    }

    async function Loading() {
        setLoading(true)
        
        let temp = null
        temp = await GetBirds()

        console.log(temp)

        // make sure temp is not null
        if(temp) {
            setData(temp)

            //await Filter()
            setBirdList(temp.map((b) => <li key={b.id}>
                <div className="task-item">
                    <div className="task-itembody">
                        {b.observed.time}
                    </div>
                    <div className="task-itembody">
                        <h2>{b.species}, in {b.observed.location}</h2>
                    </div>
                </div>
                </li>))
        }
        else {
            setData([{"name": "error"}])
        }

        console.log(data)

        setLoading(false)
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