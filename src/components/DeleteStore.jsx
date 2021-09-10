import styled from "styled-components"
import TYPES from "./context/TYPES";

const ContainerStoreTable = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

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
    border: 2px solid white;
    border-radius:.5rem ;
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

const DeleteStore = ({state,dispatch}) => {

    return (
        <ContainerStoreTable>
           {state && state.map(({name,image,id}) => 
           <div className="row" key={id}>
           <img src={image} alt={name}/>
            <h2>{name}</h2>
            <button value={id} onClick={(e) => dispatch({type:TYPES.removestore,payload:e.target.value})}>delete</button>
           </div> )}
        </ContainerStoreTable>
    )
}

export default DeleteStore
