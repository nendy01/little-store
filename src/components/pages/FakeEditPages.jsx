import { useContext } from "react"
import { Redirect } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import EditPages from "./EditPages"

const FakeEditPages = () => {
    const {user} = useContext(UserContext)
    return (
        user?.admin ? <EditPages/> : <Redirect to="/"/>
    )
}

export default FakeEditPages
