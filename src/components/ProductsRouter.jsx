import { useContext } from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import { RestaurantsContext } from "./context/RestaurantsContext";
import { UserContext } from "./context/UserContext";
import Product from "./product";

const ContainerProducts = styled.section`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    justify-items: center;
`;
const Ifto = styled.div`
    width: 200px;
    text-align: center;
    .infoimg{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`;

const ProductsRouter = () => {

    const {pizzeria} = useParams();  

    const {user,addTocar,removetocar} = useContext(UserContext);

    const {state} = useContext(RestaurantsContext)

    const findProduct = state.find(restaurant => restaurant.name === pizzeria);

    return (
        <>
            <Ifto>
                <h1>{pizzeria}</h1>
                <img src={findProduct?.image} alt={findProduct?.name} className="infoimg"/>
            </Ifto>
            <ContainerProducts>
                {
                     findProduct?.Products?.map(product => <Product product={product} addTocar={addTocar} user={user} removetocar={removetocar} key={product.id}/>) 
                }
            </ContainerProducts>
        </>
    )
}

export default ProductsRouter
