import { useState } from 'react'
import AddToListDropDown from '../../AddToListDropDown/AddToListDropDown'
import ItemRating from '../ItemRating/ItemRating'
import ItemProgress from '../ItemProgress/ItemProgress'

const CurrentItemBox = ({
    item,
    progressData,
}) => {
    const [statusData, setStatusData] = useState({
        status: 'Add to list',
        watchedEpisodes: 0,
    })

    return statusData && item ? (
        <div className='current-item'>
            <h1>{item.title}</h1>
            <div className='frow j-between'>
                <div className='fcol a-cen'>
                    <img src={item.imgUrl} />
                    <AddToListDropDown
                        item={item}
                        passStatusData={setStatusData}
                    />
                </div>
                <div className='item-summary fcol'>
                    <ItemProgress statusData={statusData} item={item} progressData={progressData}/>
                    <ItemRating statusData={statusData} itemId={item._id} progressData={progressData}/>
                    <p>{item.synopsis}</p>
                </div>
            </div>
        </div>
    ) : null
}

export default CurrentItemBox
