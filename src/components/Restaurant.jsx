import {Link} from "react-router-dom";
import styled from "styled-components";

const ArticleStyled = styled.article`
margin-bottom: 2rem;

    img{
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }

    a{
        display: block;
        color:inherit;
        text-decoration: none;
        margin-bottom: .5rem;
        margin-top: .5rem;
    }
`;

const Restaurant = ({restaurant}) => {
    
    return (
        <>
            <ArticleStyled>
                <img src={restaurant.image} alt={restaurant.name} />
                <Link to={`/products/${restaurant.name}`}>{restaurant.name}</Link>
            </ArticleStyled>
        </>
    )
}

export default Restaurant
