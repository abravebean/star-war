import {useState, useEffect} from 'react';
import './App.css';
import {PlanetData} from "./components/PlanetData";
import {getAllPlanetData} from "./components/PlanetDisplay";

 function App() {

  const [planetData, setPlanetData] = useState({
    count: null,
    next: null,
    previous: null,
    results: [],
  });


  const results = planetData.results
// use effect is a react hook 
async function makeApiCall(url) {
  const planetData = await getAllPlanetData(url);
  setPlanetData(planetData)
};
    useEffect(() => {
    makeApiCall();

  }, []);
  return (
    console.log({results}),


    <div className="App">
      <h1>
        Planet Destroying StarShips
      </h1>
   <div className="Planets">
     {
      results.map((Planet, idx) => 

    <PlanetData 
    {...Planet}
    key={idx} 
    cost={Planet.cost_in_credits}
    />
    
      )}
      </div>
    </div>
  );
}




export default App;