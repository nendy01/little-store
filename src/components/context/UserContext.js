import { createContext, useState,useEffect } from "react";

const UserContext = createContext();

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [{name:"admin",email:"admin@gmail.com",password:"admin",admin:true,image:"https://www.pikpng.com/pngl/m/5-51025_800-pixels-wide-200-pixels-tall-clipart.png",productsFav:[]}];


const UserProvider = ({children}) =>{
  
 const result = JSON.parse(localStorage.getItem('usuario'));

    const [Users, setUsers] = useState(usuarios);
    const [user, setUser] = useState(null)
    const [efect, setEfect] = useState(false)

    useEffect(() => {
      localStorage.setItem('usuario',JSON.stringify(user));
    },[user,efect])

   useEffect(() => {
      setUser(result)
   },[])

    useEffect(() => {
      localStorage.setItem('usuarios',JSON.stringify(Users));
    }, [Users])

    const login = user =>{ 
      const u = Users.find(usuario => usuario.password === user.password && usuario.email === user.email);
        setUser(u);
      return u
    }

    const logout = () => setUser(null);

    const registers = user =>{ 
      const nose = Users.some(usuario => usuario.email === user.email);
      if (!nose) {
        setUsers([...Users,user])
        setUser(user)
        return true
      } else {
        return false
      }
    }

    const addTocar = (id) => {
      const rest = user.productsFav;
      const arr = new Set([...rest])
      setUser({...user,productsFav:[...arr,id] })
      setEfect(1)
      };

      const removetocar = (id) =>{
      const rest = user.productsFav.filter(product => product.id !== id);
      setUser({...user,productsFav: [...rest] })
      setEfect(2)
      }

      const removeallfromcar = () =>{
        setUser({...user,productsFav: [] })
      setEfect(3)
      }
      const editUser = (newData)=>{

        let change ;

        const edi = Users.map(data =>{
          change = data.password === newData.lastpassword && data
          return data.password === newData.lastpassword ? {...data,...newData} : data ;
        })
          setUsers(edi)
          setUser({...change,...newData});
      }

      const removeUSer = (id) => {
        const filted = Users.filter(user => user.email !== id);
        setUsers(filted);
      }

    return (
        <UserContext.Provider value={{user,Users,login,logout,registers,addTocar,removetocar,removeallfromcar,editUser,removeUSer}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext}
export default UserProvider