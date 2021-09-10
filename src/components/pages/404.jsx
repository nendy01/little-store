import React from 'react'
import styled from 'styled-components'
import hakerman from "../../assets/hakerman.gif"

const Container404 = styled.div`
width: 100%;
height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

const Errores = () => {
    return (
        <Container404>
            <img src={hakerman} alt="hakerman-404"/>
            <h2>this is my page not found 404 </h2>
        </Container404>
    )
}

export default Errores

