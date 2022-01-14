import { useState, useContext, useEffect } from 'react'
import AddToListDropDown from '../../AddToListDropDown/AddToListDropDown'

const CurrentMovie = ({
    movie,
    progressData,
    setUpdatedEpisodes,
    updatedEpisodes,
}) => {
    const [statusData, setStatusData] = useState({status: 'Add to list', watchedEpisodes: 0})
    const [displayEpisodes, setDisplayEpisodes] = useState(updatedEpisodes)

    useEffect(() => {
        console.log(movie)
        console.log(statusData)
        if (statusData) {
            setDisplayEpisodes(statusData.watchedEpisodes)
        } else {
            setDisplayEpisodes(progressData.episodes)
            setStatusData(progressData.status)
        }
    }, [progressData, statusData])

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
                        Progress:
                        {statusData.status == 'watching' ? (
                            <input
                                type='number'
                                value={updatedEpisodes}
                                min={0}
                                max={movie.episodes}
                                onChange={(e) =>
                                    setUpdatedEpisodes(e.target.value)
                                }
                            />
                        ) : (
                            displayEpisodes
                        )}
                        /{movie.episodes}
                    </h4>

                    <h4>My rating:</h4>

                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </div>
    ) : null
}

export default CurrentMovie
