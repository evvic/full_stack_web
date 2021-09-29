import React, { useState, useEffect } from 'react'
import axios from 'axios'

async function PostBird(obj) {
    /*
    let obj = {
        "species": "crow",
        "observed": {
            "time": "",
            "location": "San Francisco"
        },
        "time_added": "now"
    }
    */

    const url = 'http://localhost:3010/birds'
    const response = await axios.post(url, obj)

    console.log(response)
    //return data.data
    return response
}

function AddBirds() {
    // split up birst state to separate state values...
    const [species, setSpecies] = useState("")
    const [observedTime, setObservedTime] = useState("")
    const [observedLocation, setObservedLocation] = useState("")
    //const [timeAdded, setTimeAdded] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("edawg")

    function ProcessBird() {
        setLoading(true)

        let today = new Date()
        console.log(today)

        let err_flag = null

        // error handling user input
        if(species === "" || species.length < 2) 
            err_flag = "error. species must be a name"
        else if(observedTime === "" || observedTime.length < 2) 
            err_flag = "error. observerved time must be a name"
        else if(observedLocation === "" || observedLocation.length < 2) 
            err_flag = "error. observerved location must be a filled"

        if(err_flag) {
            setLoading(false)
            setError(err_flag)
            return
        }

        console.log("passed input error handling")

        let obj = {
            "species": species,
            "observed": {
                "time": observedTime,
                "location": observedLocation
            },
            "time_added": today
        }

        let resp = PostBird(obj)

        console.log("response ", resp)

        setLoading(false)
        setError(err_flag)
        return
    }

    return (
    <>
        <div>
            {/*form for adding a bird to the db*/}
            {(error)? <p>{error}</p>: <p>no error</p>}
            <form>
                <div>
                    <input
                        type="text"
                        name="species"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="observed location"
                        value={observedLocation}
                        onChange={(e) => setObservedLocation(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="observed time"
                        value={observedTime}
                        onChange={(e) => setObservedTime(e.target.value)}
                    />
                </div>
                <button disabled={loading} onClick={ () => ProcessBird() }>
                    {(loading)? "submitting..." : "submit" }
                </button>
            </form>
        </div>
    </>
        
    );
}

export default AddBirds;