import styled from "styled-components"
import ButtonDeleteCar from "./ButtonDeleteCar";

const ContainerProductTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom:.5rem;
    align-items: center;

    img{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: .5rem;
    }

    @media screen and (min-width:678px){
        flex-direction: row;
        padding-right: .5rem;
    }
`;

const ProductTable = ({product,removetocar}) => {

    const {imageUrl,name,price,id} = product;

    return (
            <ContainerProductTable>
                <img src={imageUrl} alt="" />
                <h3>{name}</h3>
                <p>{price}</p>
                <ButtonDeleteCar id={id} removetocar={removetocar}/>
            </ContainerProductTable> 
    )
}

export default ProductTable
