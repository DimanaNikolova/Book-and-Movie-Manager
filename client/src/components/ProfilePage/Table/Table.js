import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TableItems = ({ items, status }) => {
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('name')

    useEffect(() => {
        setData(items)
    }, [items])

    useEffect(() => {
        const sortArray = (type) => {
            type == 'title'
                ? setData([...items].sort((a, b) => a.title.localeCompare(b.title)))
                : setData([...items].sort((a, b) => b[type] - a[type]))
        }
        sortArray(sortType)
    }, [sortType])

    return (
        <>
            <h3>{status}</h3>
            <table>
                <th className='td-title' onClick={(e) => setSortType('title')}>
                    Name
                </th>
                <th onClick={(e) => setSortType('progress')}>Progress</th>
                <th onClick={(e) => setSortType('rating')}>Rating</th>

                {data.map((m) => {
                    return (
                        <tr key={m.title}>
                            <td>
                                <Link to={'/item/' + m.movie}>{m.title}</Link>
                            </td>
                            <td>{m.progress}</td>
                            <td>{m.rating ? m.rating : 'N/A'}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default TableItems
