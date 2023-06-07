
import LocalClock from "./components/local-clock"
import ClockList from "./components/clock-list"
import useClock from "./hooks/useClock"
import ClockDisplay from "./components/shared"
import { useState } from "react"


const LOCAL_CLOCK_INIT = {
  title : '',
  timezone : '',
  offset : 0,
  
  date : null
}


function App() {

  const [localClock,setLocalClock] = useState({...LOCAL_CLOCK_INIT})

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data
    })
  }
  return (

    <div>
     
    
      
     
        <LocalClock 
        clock = {localClock} 
        updateClock={updateLocalClock} />
       

        
   
    </div>

    
  )
  
}

export default App
