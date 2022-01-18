const AddToListDropDown = ({ addItem, action, bookStatus }) => {
    return (
        <button
            className='sign-button'
            onClick={() => {
                addItem(action)
            }}
        >
            {bookStatus ? bookStatus : action}
        </button>
    )
}

export default AddToListDropDown
