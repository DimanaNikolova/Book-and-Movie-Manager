import { useEffect, useState } from 'react'
import Table from '../Table/Table'

const TableItems = ({ items }) => {
    const [completed, setCompleted] = useState([])
    const [watching, setWatching] = useState([])
    const [plan, setPlan] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setWatching([])
        setCompleted([])
        setPlan([])
        if (items) {
            items.map((m) => {
                m.status == 'watching'
                    ? setWatching((prevState) => [...prevState, m])
                    : null
                m.status == 'completed'
                    ? setCompleted((prevState) => [...prevState, m])
                    : null
                m.status == 'plan'
                    ? setPlan((prevState) => [...prevState, m])
                    : null
            })
            setIsLoading(false)
        }
    }, [isLoading, items])

    return (
        <>{!isLoading ? 
            <>
            <Table items={watching} status='Watching' />
            <Table items={completed} status='Completed' />
            <Table items={plan} status='Plan' />
            </>
         : null}</>
    )
}

export default TableItems
