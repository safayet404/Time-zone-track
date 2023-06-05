import useClock from "../../hooks/useClock"

import ClockDisplay from "../shared"
const LocalClock = ({date,timezone,offset}) =>{
    
    return (
        <div>
             <h1>This is local</h1>

             <ClockDisplay
             
             date={date}
             title = {'Tomar ammure ami aunty daki'}
             timezone={timezone}
             offset={offset}
             />
             
           
         </div>
    )
}

export default LocalClock