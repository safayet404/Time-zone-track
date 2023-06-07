import {format} from 'date-fns'

const ClockDisplay = ({date,title,timezone,offset}) =>{

    const offsetHr = offset / 60
    return (
        <div>
            <h1>This is clock display</h1>
            
            <h1>Title : {title}</h1>
            <h3>{format(date,"yyyy-MM-dd hh:mm aaaa  ")}</h3>

            <p>
                {timezone} | 
                { offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}` } 

            </p>

        </div>
    )
}

export default ClockDisplay