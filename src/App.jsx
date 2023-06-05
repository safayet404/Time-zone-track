
import LocalClock from "./components/local-clock"
import ClockList from "./components/clock-list"
import useClock from "./hooks/useClock"
import ClockDisplay from "./components/shared"


function App() {

  const {date : localDate,timezone,offset} = useClock()
  console.log(localDate)
  return (

    <div>
     
      <ClockList />
      
      {localDate !== null && (
        <LocalClock
        
        date={localDate}
        timezone={timezone}
        offset={offset}
        
        />

        
      ) }
   
    </div>

    
  )
  
}

export default App
