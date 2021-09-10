import { createContext,useState } from "react";

const ThemeContext = createContext();

const MyThemeProvider = ({children}) =>{
    const [theme, setDarktheme] = useState(true);

    const themes = {
        light: {
        colors:{
                first:"#7f7f7f",
                second: "#536878",
                third: "#e1e1e1",
                four:"#d2d2d2",
                fifth:"#7f7f7f",         
                six:"#999999"
            },
        heights:{
            header:"6rem",
            nav:"3rem"
            },
        texts:{
            text:"#000000"
            }

        },
        dark: {
           colors:{
            first:"#071929",
            second: "#1f2f3e",
            third: "#384653",
            four:"#515e69",
            fifth:"#6a757e",         
            six:"#ffffff"
           },
           heights:{
            header:"6rem",
            nav:"3rem"
        },
        texts:{
            text:"#ffffff"
        }
        }
      };

      const value = theme ? themes.dark : themes.light ;

   return ( 
   <ThemeContext.Provider value={{value,setDarktheme}} >
        {children}
    </ThemeContext.Provider>
   )
}

export {ThemeContext}
export default MyThemeProvider;