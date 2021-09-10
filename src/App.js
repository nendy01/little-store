import RestaurantsProvider from "./components/context/RestaurantsContext";
import MyThemeProvider from "./components/context/ThemeContext";
import UserProvider from "./components/context/UserContext";
import Routers from "./components/Routers";


function App() {
  return (
    <>
      <MyThemeProvider>
        <UserProvider>
          <RestaurantsProvider>
            <Routers />
          </RestaurantsProvider>
        </UserProvider>
      </MyThemeProvider>
    </>
  );
}

export default App;
