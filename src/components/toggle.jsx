import styled from "styled-components";

const ToggleDiv = styled.div`
  margin-left: 10px;
  position: absolute;
  top: 4rem;

.toggle-checkbox {
 visibility: hidden;
}

.toggle-label {
  background-color:${props => props.theme.colors.second};
  position: relative;
  z-index: 99999;
  cursor: pointer;
  border-radius: 2rem;
  display: block;
  height: 1.5rem;
  width: 3rem;
}

.toggle-label .toggle-ball {
  background-color:${props => props.theme.texts.text};
  border-radius: 50%;
  position: absolute;
  top: .2rem;
  left: .2rem;
  height: 1.1rem;
  width: 1.1rem;
  transform: translateX(0px);
  transition: transform 0.2s ease-in-out;
}

.toggle-checkbox:checked + .toggle-label .toggle-ball {
  transform: translateX(1.6rem);
}
@media screen and (min-width:678px){
  top: 7.2rem;
}
`;


const Toggle = ({setDarktheme}) => {

    const changeDark = (e) => setDarktheme(!e.target.checked);

    return (
      <ToggleDiv className="toggle-container">
        <input type="checkbox" className="toggle-checkbox" id="toggle" onChange={changeDark} />
        <label className="toggle-label" htmlFor="toggle">
          <div className="toggle-ball"></div>
        </label>
      </ToggleDiv>
    );
  };

export default Toggle;