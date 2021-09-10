import { Link } from "react-router-dom";
import styled from "styled-components"

const ContainerHome = styled.section`
    padding-left: 2rem;

    img{
        display: block;
    }

    a{
        background-color: transparent;
        margin-top: 1rem;
        display: inline-block;
        padding: 1rem 2rem;
        color: inherit;
        font-size: 1.3rem;
        text-decoration: none;
        border: 2px solid #f50057;
    }
`;

const Home = () => {
    return (
        <>
            <ContainerHome>
                <div>
                <h1>Compras en línea simplificadas</h1>
                <p>Ordene sus comestibles de SuperM con nuestra aplicación fácil de usar y entregue sus productos directamente a su puerta.</p>
                </div>
                <img src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg" alt="" />
                <Link to="products">start shopping</Link>
            </ContainerHome>
        </>
    )
}

export default Home
