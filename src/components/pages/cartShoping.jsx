import { useContext } from "react"
import styled from "styled-components";
import { UserContext } from "../context/UserContext"
import ProductTable from "../ProductTable";

const CarContent = styled.section`
    padding-left:2rem;
    min-height: 100vh;

    .table{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .button{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        background-color: #bb280a;
        border: none;
        color: #fff;
        padding: 1rem;
        display: block;
        font-size: 1.2rem;
    }
`;

const CartShoping = ({user}) => {

    const {removetocar,removeallfromcar} = useContext(UserContext);
    
    const textcar = user.productsFav.length > 0 ? "estos son sus productos" : "no tiene productos en el carrito";
    
    return (
        <CarContent>
            <h2>{textcar}</h2>
          {  user.productsFav && <div className="table">
                {
                    user.productsFav.map((product,index) =><ProductTable product={product} index={index} removetocar={removetocar} user={user}/>)
                }
            </div>}
            {user.productsFav.length > 0 && <button onClick={() => removeallfromcar()} className="button">vaciar carrito</button> }
        </CarContent>
    )
}

export default CartShoping
