import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import CartShoping from "./pages/cartShoping";
import Errores from "./pages/404";
import LoginPage from "./pages/LoginPage";
import Toggle from "./toggle";

import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import RegisterPage from "./pages/ResgisterPage";
import { UserContext } from "./context/UserContext";
import ProductsRouter from "./ProductsRouter";
import FakeEditPages from "./pages/FakeEditPages";
import View from "./pages/View";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
  html{
      overflow-x:hidden;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color:${props => props.theme.colors.third};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.texts.text};
  }
`;

const Routers = () => {

  const {value,setDarktheme} = useContext(ThemeContext);

  const {user} = useContext(UserContext)
  
  return (
    <>
      <ThemeProvider theme={value}>
        <GlobalStyle />
        <Router>
          <Header />
          <Toggle setDarktheme={setDarktheme}/>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/products" >
              <Products user={user}/>
            </Route>

            <Route path="/products/:pizzeria" component={ProductsRouter}/>

            <Route path="/cart" >
            {  user ? <CartShoping user={user}/> : <Redirect to="login"/> }
            </Route>

            <Route path="/about" component={About} />
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/edit" component={FakeEditPages}/>
            <Route path="/view" component={View}/>
            <Route path="*" component={Errores} />
          </Switch>

        </Router>
      </ThemeProvider>
    </>
  );
};

export default Routers;
