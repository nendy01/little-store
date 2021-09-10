import styled from "styled-components";
import TYPES from "./context/TYPES";
import {Redirect} from "react-router-dom"
import { useState } from "react";

const ContainerProductsStoreTable = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    .title{
        text-align: center;
    }

.row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:.5rem;
    align-items: center;
    padding-left: .5rem;
    padding-right: .5rem;

    img{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: .5rem;
    }
    button{
    padding:.5rem 1rem;
    background-color: #f50057;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1rem;
}
    
}
    @media screen and (min-width:678px){
        width: 70%;

        .row{
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }
`;

const DeleteProduct = ({see,dispatch}) => {
    const [state, setstate] = useState(false)
    
    const deleteproduct = ({value}) =>{
        const obtenido = JSON.parse(localStorage.getItem("restaurants")).find(res => res.id === see.id )
        const productosFiltrados = obtenido.Products.filter(produc => produc.id !== parseInt(value))
        const edited = {...obtenido,Products:productosFiltrados}
        dispatch({type:TYPES.removeProduct,payload:edited})
        setstate(true)
    }

    return (
        <ContainerProductsStoreTable>
            <h2 className="title">{see.name}</h2>
           {  see.Products.map(({name,imageUrl,id}) => 
           <div className="row" key={id}>
           <img src={imageUrl} alt={name}/>
            <h2>{name}</h2>
            <button value={id} onClick={({target}) => deleteproduct(target)}>delete</button>
           </div> )} 
           {state && <Redirect to={`/products/${see.name}`} />}
        </ContainerProductsStoreTable>
    )
}

export default DeleteProduct
