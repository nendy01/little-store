import { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import DeleteStore from "../DeleteStore";
import DeleteProduct from "../DeleteProduct";
import styled from "styled-components";
import DeleteOneUser from "../DeleteOneUser";

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

const DeletePages = () => {
  const { dispatch, state } = useContext(RestaurantsContext);
  const [see, setSee] = useState(false);

  const changeInput = (value) => {
    const position = --value.selectedIndex;
    const store = state[position];
    setSee(store);
  };

  return (
    <>
      <Select onChange={({ target }) => changeInput(target)}>
        <option disabled>Select</option>
        {state?.map((option) => (
          <option value={option} key={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
      {see && <DeleteProduct see={see} dispatch={dispatch} />}
      <hr />
      <DeleteOneUser />
      <hr />
      <DeleteStore state={state} dispatch={dispatch} />
    </>
  );
};

export default DeletePages;
