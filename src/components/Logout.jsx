import { useState } from "react";
import styled from "styled-components";
import { MdRemoveRedEye,MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const ContainerLogout = styled.div`
    width: 2.5rem;
    height: auto;
    position: relative;
    top:80vh;
    right: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:687px){
        position: static;
        flex-direction: row;
        width: auto;
        height: 2.5rem;
    }
     
    svg{
      //  font-size: 1rem;
        border: 2px solid #000;
        fill: ${({theme}) => theme.texts.text};
        color: inherit;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-bottom: .3rem;
        color: ${props => props.theme.colors.third};
    }
    a{
        margin-right: .3rem;
    }

    img{
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: 50%;
    }
    .border{
        outline: 2px solid white;
        border-radius: 50%;
    }
`;

const Logout = ({user,logout}) => {
//const {image:imgUser} = user;
const {image} = user;

    const [boolean, setboolean] = useState(false);

    const mostrar = () => setboolean(!boolean)

    return (
        <ContainerLogout onClick={mostrar}>
            {boolean && 
            <>
            <Link to="login">
            <MdClose title="cerrar seccion" onClick={logout}/>
            </Link>

            <Link to="view">
            <MdRemoveRedEye title="editar" />
            </Link>
            </> }

            {user && <img src={image} alt={user.name} title="options"/>}

        </ContainerLogout>
    )
}

export default Logout
