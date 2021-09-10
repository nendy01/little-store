import styled from "styled-components"

const Button = styled.button`
    padding:.5rem 1rem;
    background-color: #f50057;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1rem;
`;

const ButtonDeleteCar = ({id,removetocar,text}) => {
    return (
        <Button onClick={() => removetocar(id)}>
            {text || "delete"}
        </Button>
    )
}

export default ButtonDeleteCar
