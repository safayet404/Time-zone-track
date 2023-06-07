import { useEffect } from "react"
import useClock from "../../hooks/useClock"
import ClockActions from "../clock-action/ClockAction"

import ClockDisplay from "../shared"
const LocalClock = ({clock,updateClock}) =>{

    const {date,timezone,offset,localOffset,localTimezone}= useClock(
        clock.timezone,
        clock.offset)

        useEffect(()=>{
            updateClock({
                date,
                timezone,
                offset
            })
        },[date])
    
    return (
        <div>
             <h1>This is local</h1>

             {date && (
                <ClockDisplay
             
                date={date}
                title = {clock.title}
                timezone={timezone}
                offset={offset}
                />
   
                )}
                <ClockActions local={true}/>
             
           
         </div>
    )
}

export default LocalClock