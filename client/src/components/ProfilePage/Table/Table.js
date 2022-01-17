import { Link } from "react-router-dom"
const TableItems = ({ items, status }) => {
    const loadItems = items ? (
        items.map((m) => {
            return (
                <tr key={m.title}>
                    <td ><Link to={'/movie/' + m.movie}>{m.title}</Link></td>
                    <td>{m.rating ? m.rating : 'N/A'}</td>
                    <td>{m.progress}</td>
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
                <th>Rating</th>
                <th>Watched</th>
                {loadItems}
            </table>
        </>
    )
}

export default TableItems
