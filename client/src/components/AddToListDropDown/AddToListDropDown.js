import { useState, useContext, useEffect } from 'react'
import { addItemToList } from '../../services/itemService'
import { AuthContext } from '../../contexts/AuthContext'
import * as toaster from '../../utils/toaster'
import Button from './Button/Button'

const AddToListDropDown = ({ item, passStatusData }) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const [displayStatus, setDisplayStatus] = useState('Add to list')
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.user.user.items.map((m) => {
            m.item === item._id
                ? passStatusData({
                      status: m.status,
                      watchedEpisodes: m.progress,
                  })
                : null
            m.item === item._id ? setDisplayStatus(m.status) : null
            m.item === item._id && item.type == 'book' && m.status=='watching' ? setDisplayStatus('reading') : null
        })
    }, [])

    const addItem = (status) => {
        const uid = auth.user.user._id
        const itemId = item._id
        addItemToList(
            { uid },
            { itemId },
            status,
            item.episodes,
            item.title,
            item.type
        )
            .then((res) => {
                toaster.toastInfo(`Added ${item.title} to your ${status} list`)
                setDisplayDropdown(!displayDropDown)
                setDisplayStatus(status)
                status == 'completed'
                    ? passStatusData({
                          status,
                          watchedEpisodes: item.episodes,
                      })
                    : passStatusData({ status, watchedEpisodes: 0 })
                auth.refreshUserData()
            })
            .catch((e) => console.log(e))
    }

    const dropDown = displayDropDown ? (
        <>
            <Button
                addItem={addItem}
                action={'watching'}
                bookStatus={item.type == 'book' ? 'reading' : null}
            />
            <Button addItem={addItem} action={'completed'} />
            <Button addItem={addItem} action={'plan'} />
        </>
    ) : null

    const initialButton = (
        <button
            className='sign-button'
            onClick={() => {
                setDisplayDropdown(!displayDropDown)
            }}
        >
            {displayStatus}
        </button>
    )

    return (
        <>
            {!displayDropDown || displayStatus == 'Add to list'
                ? initialButton
                : null}
            {dropDown}
        </>
    )
}

export default AddToListDropDown
