import React from 'react'
import {IoMenu,IoClose} from "react-icons/io5"
import styled from 'styled-components';

const StyledBtn = styled.div`
    display: block;


    svg{
        color: #ffffff;
        height: 2rem;
        width: 2rem;
    }
    @media screen and (min-width:687px){
        display: none;
    }
`;


const Button = ({handle,handleclick}) => {

    const yo = () => handleclick()

    return (
        <StyledBtn onClick={yo}>
           { handle ? <IoClose/> : <IoMenu/>  }
        </StyledBtn>
    )
}

export default Button
