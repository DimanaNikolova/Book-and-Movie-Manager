import { useState, useEffect } from "react"
const MarsWeather =()=>{

    useEffect(()=>{
        console.log('hi')
        fetch('https://api.nasa.gov/insight_weather/?api_key=pH7c4Ve8AbmRuUMOcPUAvIQrusE0hNRQaZ12qCAW&feedtype=json&ver=1.0')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
return(
    <div>
        <h1>Get weather</h1>
    </div>
)
}

export default MarsWeather