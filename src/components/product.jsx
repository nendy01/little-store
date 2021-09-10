import styled from "styled-components";
import ButtonDeleteCar from "./ButtonDeleteCar";

const ContainerProduct = styled.section`
padding-left: 20%;
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    object-fit: conver;
    object-position: center;
    border-radius: 50%;
  }
  h2 {
    text-align: center;
  }
  p {
    width: 80%;
    
  }
  .add{
    padding:.5rem 1rem;
    background-color: #10db5e;
    color: #fff;
      border: none;
      font-size: 1.2rem;
      font-weight: 500;
    }
    @media screen and (min-findProductidth:678px){
     // padding-left: 20%;
  }
`;

const Product = ({ product, addTocar, user,removetocar}) => {
  const { name, description, price, imageUrl, id} = product;

 // console.log(product.id,id);

  const findProduct = user && user.productsFav.some(product => product.id === id)

  return (
    <ContainerProduct>
      <img src={imageUrl} alt="" />

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        {
        user ? findProduct ? 
        (
          <ButtonDeleteCar id={id} removetocar={removetocar}/>
        ) 
        :
        (
          <button onClick={() => addTocar(product)} className="add">
            add
          </button>
        )
        : null
        }
      </div>
    </ContainerProduct>
  );
};

export default Product;
