import { useState, useEffect } from 'react'
import './APhotoADay.scss'

const APhotoADay = () => {
    const [picture, setPicture] = useState('')
    useEffect(() => {
        fetch(
            'https://api.nasa.gov/planetary/apod?api_key=pH7c4Ve8AbmRuUMOcPUAvIQrusE0hNRQaZ12qCAW'
        )
            .then((res) => res.json())
            .then((img) => {
                setPicture(img.url)
            })
    }, [picture])
    return (
        <div className='fcol a-cen'>
            <h1>Get a random photo</h1>
            {picture ? <img src={picture} /> : null}
            <button>Save this photo to your gallery</button>
        </div>
    )
}

export default APhotoADay
