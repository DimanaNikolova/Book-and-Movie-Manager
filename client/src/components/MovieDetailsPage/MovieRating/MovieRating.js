import { useState, useEffect } from 'react'

const MoiveRating = ({ progressData }) => {
    useEffect(()=>{
        console.log(progressData)
    },[progressData])
    return (
        <h4>
            My Rating:{' '}
                <input
                    type='number'
                    min={1}
                    max={10}
                    onChange={(e) => {}}
                />

        </h4>
    )
}

export default MoiveRating
