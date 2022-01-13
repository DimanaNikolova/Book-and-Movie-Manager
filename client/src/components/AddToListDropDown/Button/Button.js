const AddToListDropDown = ({ addMovie, action }) => {
    return (
        <button
            className='sign-button'
            onClick={() => {
                addMovie(action)
            }}
        >
            {action}
        </button>
    )
}

export default AddToListDropDown
