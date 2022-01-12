import { Link } from 'react-router-dom'
import './UserHomePage.scss'

const UserHomePage = () => {
    return (
        <>
            <div className='user-homepage-container frow j-around'>
                <Link to='/movie-catalog' className='catalog-link'>
                    <img src='https://images.jdmagicbox.com/comp/jd_social/news/2018jul23/image-123360-yg1840yb6l.jpg' />
                    Movie Catalog
                </Link>
                <Link className='catalog-link'>
                    <img src='https://www.book.store.bg/lrgimg/281288/kym-nebeto.jpg' />
                    Book Catalog
                </Link>
                <Link className='catalog-link'>
                    <img src='https://images-na.ssl-images-amazon.com/images/I/91D07epNE9L.jpg' />
                    Comic and Manga Catalog
                </Link>
            </div>
        </>
    )
}

export default UserHomePage
