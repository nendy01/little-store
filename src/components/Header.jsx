import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';
import { UserContext } from './context/UserContext';
import Nav from './Nav';
import Logout from './Logout';
import { HiOutlineLogin } from "react-icons/hi";


const MainHeader = styled.header`
    height: 5rem;
    width: 100%;
    background-color: ${({theme}) => theme.colors.first};
    display: flex;
    position: sticky;
    top: 0;
    z-index: 999999999;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 3rem;

    .logo{
        font-size: 2.5rem;
        font-weight: 600;
        text-decoration: none;
        color: aqua;
        
    
    }
    .login{
        position: absolute;
        right: 1rem;
        font-size: 2rem;
        color: ${({theme}) => theme.texts.text};
        bottom: -88vh;
    }

    @media screen and (min-width:687px){
        margin-bottom: 5rem;
        .login{
        position: static;
        
        }
    }
`;

const Header = () => {
    const [visible, setVisible] = useState(false);

    const {user,logout} = useContext(UserContext);

    const handleclick = () => setVisible(!visible)

    return (
        <MainHeader>
            <Link to="/" className="logo">superM</Link>

           { user ? 
           <Logout user={user} logout={logout}/> 
           : 
            <Link to="/login" >
                <HiOutlineLogin className="login"/>
            </Link> 
            }

            <Nav visible={visible} setVisible={setVisible}/>
           
            <Button handle={visible} handleclick={handleclick}/>
        </MainHeader>
    )
}

export default Header
