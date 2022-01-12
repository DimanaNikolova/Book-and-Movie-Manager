import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './ProfilePage.scss'

const ProfilePage = (props) => {
    const [movies, setMovies] = useState([])
    const auth = useContext(AuthContext)
    useEffect(() => {
        setMovies(auth.user.movies)
    }, [])

    const loadMovies = movies
        ? movies.map((m) => {
              return (
                  <tr>
                      <td>{m.title}</td>
                      <td>{m.status}</td>
                      <td>{m.progress}</td>
                  </tr>
              )
          })
        : null
    return (
        <div className='profile-page-container frow a-cen j-around'>
            <div className='user-info fcol a-cen'>
                <div className='profile-picture'></div>
                <p>{auth.user.email}</p>
            </div>
            <div>
                <div className='profile-items-navigation'>
                    <Link>My movies</Link>
                    <Link>My books</Link>
                    <Link>My comics</Link>
                </div>
                <div className='current-items'>
                    <table>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Progress</th>
                    {loadMovies}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
