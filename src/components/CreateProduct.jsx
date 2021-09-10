import { useContext, useState } from "react";
import styled from "styled-components";
import { RestaurantsContext } from "./context/RestaurantsContext";
import FormCreateProduct from "./FormCreateProduct";

const Select = styled.select`
display: block;
  margin: 1rem auto;
  width: 60%;
  padding: .5rem 1rem;
  border-radius: inherit.5rem;
  background-color: transparent;
  color: inherit;
  
    option{
        background-color: turquoise;
    }

  &:focus {
    outline: none;
  }
`;

const CreateProduct = () => {
  const [know, setKnow] = useState(false);
  const { state, dispatch } = useContext(RestaurantsContext);


  const change = (value) => {
    const position = --value.selectedIndex;
    const store = state[position];
    setKnow(store);
  };

  

  return (
    <>
      <Select onChange={({ target }) => change(target)}>
         <option selected>
          Select
        </option> 
        {state?.map((option) => (
          <option value={option} key={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
      {know && <h3>{know.name}</h3>}
      {know && <FormCreateProduct dispatch={dispatch} know={know} />}
      
    </>
  );

};

export default CreateProduct;
