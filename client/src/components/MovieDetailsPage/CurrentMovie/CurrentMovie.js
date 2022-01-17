import { useState, useEffect } from 'react'
import AddToListDropDown from '../../AddToListDropDown/AddToListDropDown'
import MoiveRating from '../MovieRating/MovieRating'
import MovieProgress from '../MovieProgress/MovieProgress'

const CurrentMovie = ({
    movie,
    progressData,
    // setUpdatedEpisodes,
    // updatedEpisodes,
}) => {
    const [statusData, setStatusData] = useState({
        status: 'Add to list',
        watchedEpisodes: 0,
    })
    // const [displayEpisodes, setDisplayEpisodes] = useState(updatedEpisodes)

    // useEffect(() => {
    //     console.log(statusData)
    //     if (statusData) {
    //         setDisplayEpisodes(statusData.watchedEpisodes)
    //     } else {
    //         setDisplayEpisodes(progressData.episodes)
    //         setStatusData(progressData.status)
    //     }
    // }, [progressData, statusData])

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
                    <MovieProgress statusData={statusData} movie={movie} progressData={progressData}/>
                    <MoiveRating statusData={statusData} movieId={movie._id} progressData={progressData}/>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </div>
    ) : null
}

export default CurrentMovie
