import React, { useState, useEffect }from 'react';

const chirps = [
  {
    username: "@I_Am_Bennett",
    chirp: "It just goes to show..."
  },
  {
    username: "@Michael_Scarn45",
    chirp: "I want people to be afraid of how much they love me."
  },
  {
    username: "@Tommy_Hav",
    chirp: "I have never taken the high road, but I tell other people to ’cause then there’s more room for me on the low road."
  }
]

const App = () => {

  const [chirp, setChirp] = useState([])


  
  return (
    <>
      <h1>App Component</h1>
      
    </>
  )
}

export default App;