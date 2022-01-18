import { Link } from "react-router-dom"
import { useEffect } from "react"
const TableItems = ({ items, status }) => {

    useEffect(()=>{

    },[items])
    const loadItems = items ? (
        items.map((m) => {
            return (
                <tr key={m.title}>
                    <td ><Link to={'/item/' + m.item}>{m.title}</Link></td>
                    <td>{m.progress}</td>
                    <td>{m.rating ? m.rating : 'N/A'}</td>
                </tr>
            )
        })
    ) : (
        <tr>N/A</tr>
    )

    return (
        <>
            <h3>{status}</h3>
            <table>
                <th className="td-title">Name</th>
                <th>Progress</th>
                <th>Rating</th>
                {loadItems}
            </table>
        </>
    )
}

export default TableItems
