import useClock from "../../hooks/useClock"


const LocalClock = () =>{


    const {clock : est} = useClock('EST')
    const {clock : pst} = useClock('PST')
    const {clock : utc} = useClock('UTC')
  


    console.log('EST' , est.date)
    console.log('PST' , pst.date)
    console.log('UTC' , utc.date)
    

    return (
        <div>
            <h1>I'm local clock</h1>
        </div>
    )
}

export default LocalClock