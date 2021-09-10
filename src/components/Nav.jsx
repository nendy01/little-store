import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {MdShoppingCart} from "react-icons/md";
import { UserContext } from "./context/UserContext";
import {useContext } from "react";

const StyleNav = styled.nav`
    position: absolute;
    text-decoration: none;
    left: 0;
    z-index: 9999;
    top: 5rem;
    height: calc(100vh - 5rem);
    width: 100%;
    background-color: ${props => props.theme.colors.four};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => props.visible ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform .2s ease-in-out;

    @media screen and (min-width:687px){
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: auto;
      transform: translateX(0%);
    }
    .last{
      background-color: cadetblue;
      border-radius: .2rem;
      padding: 1rem 2rem;
      font-size: 1rem;
    }
    `;

    const Link = styled(NavLink)`
      transition: all .2s;
      text-decoration: none;
      color: ${props => props.theme.texts.text};
      display: block;

      border-radius: .2rem;
      padding: 1rem 2rem;

      &:active{
        color: transparent;
      }

      
      @media screen and (min-width:687px){
        height: 100%;
        
        &:hover{ 
          background-color: gray;
        }
      }
    `;


const Nav = ({visible,setVisible}) => {
  const {user} = useContext(UserContext)

  const close = (e) =>{
    const nav = e.target;
    if(nav.matches(`a`)){
      setVisible(false);
    }
  }

  return (
    <StyleNav visible={visible} onClick={close}> 
            <Link exact to="/"  activeClassName="active" >Home</Link>
            <Link to="/about"  activeClassName="active" >About</Link>
            <Link to="/products"  activeClassName="active" >Product</Link>
            <Link to="/cart"  activeClassName="active" className="last">
              <MdShoppingCart/> Cart {user?.productsFav?.length > 0  && `(${user?.productsFav?.length})`}
            </Link>
    </StyleNav>
  );

};

export default Nav;
