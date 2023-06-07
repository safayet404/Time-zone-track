import { useEffect, useState } from "react"
import {addMinutes} from 'date-fns'

const init = {
   
    timezone : {
        type : '',
        offset : ''
    },
    date_utc : null,
    date : null
}

const TIMEZONE_OFFSET = {
    local : 6*60,
    PST : -7*60,
    EST : -4*60,
}

const useClock = (timezone,offset) =>{

    const [localDate,setLocalDate] = useState(null)
    const [localOffset,setLocalOffset] = useState(0)
    const [localTimezone,setLocalTimezone] = useState('')
    const [utc,setUtc] = useState(null)

    useEffect(()=>{
        let d = new Date()
        const lo = d.getTimezoneOffset()
        d = addMinutes(d,lo)
        setUtc(d)

        setLocalOffset(lo)
        
    },[])

    useEffect(()=>{
       

        if(utc !==null)
        {
            if(timezone)
            {
                offset = TIMEZONE_OFFSET[timezone] ?? offset
                const newUtc = addMinutes(utc, offset) 
                setLocalDate(newUtc)
            }
            else
            {
                const newUtc = addMinutes(utc,-localOffset)
                const dateStrArr = newUtc.toUTCString().split(' ')
                setLocalDate(newUtc)
                setLocalTimezone(dateStrArr.pop())
            }
           
        }
        
    },[utc])

    return {
        date : localDate,
        dateUTC : utc,
        offset : offset ?? localOffset,
        timezone : timezone ?? localTimezone,
        localOffset,
        localTimezone
    }
}


export default useClock