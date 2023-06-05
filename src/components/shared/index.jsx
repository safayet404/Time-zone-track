

const ClockDisplay = ({date,title,timezone,offset}) =>{
    return (
        <div>
            <h1>This is clock display</h1>
            
            <h1>Title : {title}</h1>
            <h3>Local date is : {date.toString()}</h3>

            <p>
                {timezone} | {offset / 60}
            </p>

        </div>
    )
}

export default ClockDisplay