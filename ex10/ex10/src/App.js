import './App.css';
import React, { useState, useEffect } from 'react'
import ShowBirds from './ShowBirds';
import AddBirds from './AddBirds';
import Swag from './swag';

function App() {
  const [toggle, setToggle] = useState("add") //versus "show"

  return (
    <div className="App">
      <Swag />
      <button onClick={ () => { setToggle((toggle === "add")? "show ": "add")}}>
        {(toggle === "add")? "view recorded bird sightings" : "record a bird sighting" }
      </button>
      {(toggle === "add")? <AddBirds /> : <ShowBirds /> }
      
    </div>
  );
}

export default App;
