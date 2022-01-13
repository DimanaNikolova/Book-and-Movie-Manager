import { useState, useContext, useEffect } from 'react'
import AddToListDropDown from '../../AddToListDropDown/AddToListDropDown'

const CurrentMovie = ({
    movie,
    progressData,
    setUpdatedEpisodes,
    updatedEpisodes,
}) => {
    const [statusData, setStatusData] = useState()
    const [displayEpisodes, setDisplayEpisodes] = useState(updatedEpisodes)

    useEffect(() => {
        console.log(statusData)
        if (statusData) {
            setDisplayEpisodes(statusData.watchedEpisodes)
        } else {
            setDisplayEpisodes(progressData.episodes)
            setStatusData(progressData.status)
        }
    }, [progressData, statusData])

    const watchingInput = movie && (
        <input
            type='number'
            value={updatedEpisodes}
            min={0}
            max={movie.episodes}
            onChange={(e) => setUpdatedEpisodes(e.target.value)}
        />
    )

    return statusData && movie ? (
        <div className='current-movie'>
            <h1>{movie.title}</h1>
            <div className='frow j-between'>
                <div className='fcol a-cen'>
                    <img src={movie.imgUrl} />
                    <AddToListDropDown
                        movie={movie}
                        passStatusData={setStatusData}
                    />
                </div>
                <div className='movie-summary fcol'>
                    <h4>
                        Progress:{' '}
                        {statusData.status == 'watching'
                            ? watchingInput
                            : displayEpisodes}
                        /{movie.episodes}
                    </h4>

                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </div>
    ) : null
}

export default CurrentMovie
