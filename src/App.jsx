import React, { useState, useEffect } from 'react';
import { BiAt } from "react-icons/bi";
import { GiHummingbird } from "react-icons/gi";


const App = () => {

  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const addChirp = (e) => {
    e.preventDefault();
    console.log('test');
    // const newChirp = setChirp.slice();
    // newChirp.unshift(message);
    // setChirp(newChirp);
    // setMessage('');
  }


  return (
    <>
      <h1 className="m-3 mb-5 text-center">Chirper<GiHummingbird className="mx-2" /></h1>

      <section className="mb-5 mx-auto" id="chirp-form">
        <div className="input-group mb-2 shadow">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
        </div>

        <div className="input-group shadow">
          <div className="input-group-prepend">
            <span className="input-group-text">What's on your mind?</span>
          </div>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
        <button className="btn btn-primary mt-2 shadow" onClick= {addChirp}>Chirp It</button>
      </section>
<hr></hr>
      <section>
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt />I_Am_Bennett</div>
          <div className="card-body">
            <p>It just goes to show...</p>
          </div>
        </div>
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt />Mike_Scarn45</div>
          <div className="card-body">
            <p>I want people to be afraid of how much they love me.</p>
          </div>
        </div>
        <div className="card bg-light shadow mb-3 mx-auto">
          <div className="card-header"><BiAt />TommyTommyHavHav</div>
          <div className="card-body">
            <p>At the risk of bragging, one of the things I’m best at is riding coattails. Behind every successful man is me. Smiling and taking partial credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;