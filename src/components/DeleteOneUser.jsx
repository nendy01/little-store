import { useContext } from "react"
import styled from "styled-components"
import {UserContext} from "./context/UserContext"
import ButtonDeleteCar from "./ButtonDeleteCar";

const ContainerUsers = styled.section`
max-width: 90%;
margin-left: auto;
margin-right: auto;
    .flex{
        padding: .2.5rem .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width:678px){  
        width: 40%;
    }
`;

const DeleteOneUser = () => {
    const {Users,removeUSer} = useContext(UserContext)
    return (
        <ContainerUsers>
            {Users.map(user =>(
                user.email !== "admin@gmail.com" ?
                <div key={user.email} className="flex">
               <h3>{user.name}</h3> 
                <p>{user.email}</p>
                <p>{user.password}</p>
                <ButtonDeleteCar id={user.email} removetocar={removeUSer}/>
                </div>
                : null
                ))}
        </ContainerUsers>
    )
}

export default DeleteOneUser
