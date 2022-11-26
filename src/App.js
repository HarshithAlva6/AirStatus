import './App.css';
import React, { useState } from 'react';
import Factors from './Tables/factors';
import Months from './Tables/months';
import Flights from './Tables/flights';

function App() {
  const [useComp,setComp] = useState();
  const whichComp = (vals) => {
    var renderedComp;
    console.log(vals);
    if (vals === "month")
      renderedComp = <Months />;
    else if (vals === "factor")
      renderedComp = <Factors />;
    else 
      renderedComp = <Flights />;
    setComp(renderedComp);
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div id ="heading">
          <h2>AirStat - Flight Status Informatics</h2>
        </div>
      </nav>
      <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-2" id="green">
                <ul class="nav nav-pills flex-column mb-auto">
                  <li class = "nav-item">
                    <a href="#" onClick={() => whichComp("flight")}><h5>Flight Based Delays</h5></a>
                  </li>
                  <li class = "nav-item">
                    <a href="#" onClick={() => whichComp("month")}><h5>Month Based Delays</h5></a>
                  </li>
                  <li class = "nav-item">
                    <a href="#"onClick={() => whichComp("factor")}><h5>Factors Affecting Delays</h5></a>
                  </li>
                </ul>
            </div>
            <div class="col-10">
              {useComp}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
