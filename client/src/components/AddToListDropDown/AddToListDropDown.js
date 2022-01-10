import { useState } from 'react'

const AddToListDropDown = () => {
    const [displayDropDown, setDisplayDropdown] = useState(false)

    const dropDown = displayDropDown ? (
        <>
            <button className='sign-button'>Watching</button>
            <button className='sign-button'>Completed</button>
            <button className='sign-button'>Plan to Watch</button>
        </>
    ) : null

    return (
        <>
            <button
                className='sign-button'
                onClick={() => {
                    setDisplayDropdown(!displayDropDown)
                }}
            >
                Add to list
            </button>
            {dropDown}
        </>
    )
}

export default AddToListDropDown
