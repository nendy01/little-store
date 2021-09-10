import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { RestaurantsContext } from "../context/RestaurantsContext";
import Restaurant from "../Restaurant"

const ContainerProducts = styled.article`
    width: 100%;
    h2{
        margin-left:4rem;
    }
    
    p{
        text-align:center;
        margin-bottom: 2rem;
    }

    .products{
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-items: center;
        text-align:center;
    }
    .admin{
        color: #ffffff;
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
    }
`;

const Products = ({user}) => {

    const {state} = useContext(RestaurantsContext);

    return (
        <ContainerProducts>
           <div>
           <h2>productos</h2>
            <p>Echa un vistazo a nuestros restaurantes asociados</p>
           </div>

          {user?.admin && <Link to="edit" className="admin">eres admin</Link>}
           <div className="products">
               {state?.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}/>)}
           </div>

        
          
        </ContainerProducts>
    )
}

export default Products
