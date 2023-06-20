import React, {useEffect,useState} from 'react'
import './App.css'

function App() {

  const [backEndData, setbackEndData] = useState([{}])

  useEffect(() =>{

    fetch("/api").then(

      response => response.json()
    ).then(
      data => {
        setbackEndData(data)
      }

    )

  }, [])

  return (
    <div>
      
      {(typeof backEndData.users === 'undefined') ? (
        <p>Loading</p>
      ): (
        backEndData.users.map((user,i) => (
          <p key = {i}> {user}</p>
        ))
      )}

    </div>
  )
}

export default App