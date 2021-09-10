import { createContext, useEffect, useReducer } from "react";
import { restaurants as db } from "../db";
import TYPES from "./TYPES";

const RestaurantsContext = createContext();

const getlocal = () => JSON.parse(localStorage.getItem("restaurants"))
const setlocal = (value) => localStorage.setItem("restaurants",JSON.stringify(value))


const reducer = (state,{type,payload}) =>{

    switch (type) {
      case TYPES.addstore: 
        const know = getlocal()
        const loadUser = {...payload,Products:[],id:++know.length}
        const res = [...state,loadUser]
        localStorage.setItem("restaurants",JSON.stringify(res))
        const reslocal = getlocal()
      return [...reslocal]

      case TYPES.addProduct:
          const get = getlocal()
          const getEdited = get.map(store => store.id === payload.id ? payload : store)
          localStorage.setItem('restaurants', JSON.stringify(getEdited));
      return [...getEdited]

      case TYPES.removestore:
            const obtener = getlocal().filter(store => store.id !== parseInt(payload))
            setlocal(obtener)
      return [...obtener]

        case TYPES.removeProduct:
            const editlocal =  getlocal().map(product => product.id === payload.id ? payload : product);
            setlocal(editlocal);
            const yes = getlocal()
            console.log(yes);
      return yes

      default:
      return state ;
    }

}

const RestaurantsProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, getlocal() || db);

    useEffect(() => {
     localStorage.setItem('restaurants',JSON.stringify(state))
    }, [state])

    useEffect(() => {
        localStorage.setItem('restaurants',JSON.stringify(state));
        dispatch({type:"gsahj",payload:"jhsjkdf"})
       }, [state])

    return (
        <RestaurantsContext.Provider value={{state,dispatch}}>
        {children}
        </RestaurantsContext.Provider>
    )
}

export {RestaurantsContext}
export default RestaurantsProvider;