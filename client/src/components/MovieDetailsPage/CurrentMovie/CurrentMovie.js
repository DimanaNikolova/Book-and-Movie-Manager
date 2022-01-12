import { useState } from 'react'
import AddToListDropDown from '../../AddToListDropDown/AddToListDropDown'

const MovieDetailsPage = ({ movie, progressData, setUpdatedEpisodes, updatedEpisodes }) => {

    return movie ? (
        <div className='current-movie'>
            <h1>{movie.title}</h1>
            <div className='frow j-between'>
                <div className='fcol a-cen'>
                    <img src={movie.imgUrl} />
                    <AddToListDropDown movie={movie} />
                </div>
                <div className='movie-summary fcol'>
                    {progressData.status == 'watching' ? (
                        <h4>
                            Progress:
                            <input
                                type='number'
                                value={updatedEpisodes}
                                onChange={(e) =>
                                    setUpdatedEpisodes(e.target.value)
                                }
                            />
                            /{movie.episodes}
                        </h4>
                    ) : (
                        <h4>
                            Progress: {updatedEpisodes}/{movie.episodes}
                        </h4>
                    )}
                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </div>
    ) : null
}

export default MovieDetailsPage
