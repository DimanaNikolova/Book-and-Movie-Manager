import { useEffect, useContext, useState } from 'react'
import { getItem } from '../../services/itemService'
import { AuthContext } from '../../contexts/AuthContext'
import CurrentItemBox from './CurrentItemBox/CurrentItemBox'
import './ItemDetailsPage.scss'

const ItemDetailsPage = (props) => {
    const [item, setItem] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [progressData, setProgressData] = useState({})
    const auth = useContext(AuthContext)
    const itemId = props.match.params.id

    useEffect(() => {
        getItem(itemId).then((res) => {
            setItem(res)
            auth.user.user.items.map((m) => {
                m.item === itemId
                    ? setProgressData({
                          status: m.status,
                          episodes: m.progress,
                          rating: m.rating,
                      })
                    : null
            })
            setIsLoading(false)
        })
    }, [isLoading])

    return (
        item ? <div className='details-page-container frow'>
            <div className='details fcol'>
                <h3>Details</h3>
                        <p><span>Title:</span> {item.title}</p>
                        <p><span>{item.type == 'movie'? 'Episodes: ' : 'Pages: '}</span> {item.episodes}</p>
                        <p><span>First released:</span> {item.startDate}</p>
                        {item.type == 'movie' ? <p><span>Last released:</span> {item.endDate}</p> : null}

            </div>
            <CurrentItemBox
                item={item}
                progressData={progressData}
            />
        </div> : null
    )
}

export default ItemDetailsPage
