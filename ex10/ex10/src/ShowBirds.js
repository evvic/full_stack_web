import React, { useState, useEffect, Card } from 'react'
import axios from 'axios'
import './App.css';
import moment from 'moment'

async function GetBirds() {
    const url = 'http://localhost:3010/birds'
    const data = await axios.get(url)
    return data.data
}

function CheckTime(time) {
    if(moment(time, moment.ISO_8601, true).isValid()) {
        let d = new Date(time)

        d = d.toLocaleString();

        return d
    }
    else return time
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
            setBirdList(data.map((b) => <li key={b.id}>
                <div className="task-item">
                    <div className="task-itembody">
                        observed {b.observed.time}
                    </div>
                    <div className="task-itembody">
                        <h2>{b.species}, in {b.observed.location}</h2>
                        <p>recorded on {CheckTime(b.time_added)}</p>
                    </div>
                </div>
                </li>))
        }
        else {
            //filter by spec
            let filtered = await data.filter((event) => {
                console.log(event.species)
                if(event.species.includes(spec.toLowerCase()))
                    return event.species
            })

            setBirdList(filtered.map((b) => <li key={b.id}>
                <div className="task-item">
                    <div className="task-itembody">
                        observed {b.observed.time}
                    </div>
                    <div className="task-itembody">
                        <h2>{b.species}, in {b.observed.location}</h2>
                        <p>recorded on {CheckTime(b.time_added)}</p>
                    </div>
                </div>
                </li>))
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

            //onsole.log()

            //await Filter()
            setBirdList(temp.map((b) => <li key={b.id}>
                <div className="task-item">
                    <div className="task-itembody">
                        observed {b.observed.time}
                    </div>
                    <div className="task-itembody">
                        <h2>{b.species}, in {b.observed.location}</h2>
                        <p>recorded on {CheckTime(b.time_added)}</p>
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
                <br/>
                <h2>View bird sighting records</h2>
                <label>
                    <textarea 
                        placeholder="Filter by species:"
                        value={filter} onChange={(c) => {
                            setFilter(c.target.value)
                            //console.log("filter " + filter )
                            Filter(filter)
                            }} />
                </label>
                <p>press 'enter' to search</p>
                
                {bird_items}
                <br/>
            </> 
        }
        </>
        
    );
}

export default ShowBirds;