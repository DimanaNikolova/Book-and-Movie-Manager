const AddToListDropDown = ({ addMovie, action, bookStatus }) => {
    return (
        <button
            className='sign-button'
            onClick={() => {
                addMovie(action)
            }}
        >
            {bookStatus ? bookStatus : action}
        </button>
    )
}

export default AddToListDropDown
