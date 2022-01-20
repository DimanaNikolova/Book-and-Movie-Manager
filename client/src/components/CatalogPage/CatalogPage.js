import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllItems } from '../../services/itemService'
import AddToListDropDown from '../AddToListDropDown/AddToListDropDown'
import { useLocation } from 'react-router-dom'

import './CatalogPage.scss'

const CatalogPage = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')
    const [statusData, setStatusData] = useState()

    const location = useLocation()

    useEffect(() => {
        if(search == ''){
            getAllItems()
            .then((data) => {
                location.pathname == '/book-catalog'
                    ? setItems(data.filter((item) => item.type == 'book'))
                    : setItems(data.filter((item) => item.type == 'movie'))
                
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }, [search])

    const loadItems = items
        ? items.map((i) => {
              return (
                  <div
                      className='current-item fcol a-cen j-around'
                      key={i.title}
                  >
                      <img src={i.imgUrl} />
                      <Link to={`/item/${i._id}`}>{i.title}</Link>
                      <AddToListDropDown
                          item={i}
                          passStatusData={setStatusData}
                      />
                  </div>
              )
          })
        : null

    const searchHandler = (e) => {
        setSearch(e.target.value)
        setItems(items.filter(item=> item.title.toLowerCase().includes(e.target.value)))
    }

    return (
        <div className='item-catalog-wrapper fcol a-cen'>
            {location.pathname == '/book-catalog' ? (
                <h1>Book catalog</h1>
            ) : (
                <h1>Movie catalog</h1>
            )}
            <input
                className='search-bar'
                type='text'
                value={search}
                onChange={(e) => {
                    searchHandler(e)
                }}
                placeholder='Search'
            />
            <div className='items-container frow j-around'>{loadItems}</div>
        </div>
    )
}

export default CatalogPage
