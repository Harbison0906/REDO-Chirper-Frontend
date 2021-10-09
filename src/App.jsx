import React, { useState, useEffect } from 'react';
import { BiAt } from "react-icons/bi";



const App = () => {

  const [chirp, setChirp] = useState()



  return (
    <>
      <h1 className="m-3 mb-5 text-center">Chirper</h1>
      <section>
        
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt/>I_Am_Bennett</div>
          <div className="card-body">
            <p>It just goes to show...</p>
          </div>
        </div>
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt/>Mike_Scarn45</div>
          <div className="card-body">
            <p>I want people to be afraid of how much they love me.</p>
          </div>
        </div>
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt/>TommyTommyHavHav</div>
          <div className="card-body">
            <p>At the risk of bragging, one of the things I’m best at is riding coattails. Behind every successful man is me. Smiling and taking partial credit.</p>
          </div>
        </div>
      </section>


    </>
  )
}

export default App;