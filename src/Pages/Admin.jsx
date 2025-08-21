import { useEffect, useState } from "react"
import { getFromLocalStorage } from "../utils/helpers"

const AdminPage = () => {

    const [role, setRole] = useState(null)
    useEffect(()=> {
        const userData = getFromLocalStorage('user_data')
        
        setRole(JSON.parse(userData).role)
    }, [])

    if (!role) {

        return <p>Access denied</p>
    } else if (role === 'admin') {

        return <p>Admin page</p>
    } else {

        return <p>Unauthorized user</p>
    }
}

export default AdminPage