import { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
import PropTypes from "prop-types";

const CartContext = createContext()

const getLocalItem=()=>{
   let array=JSON.parse(localStorage.getItem("todo"))
   console.log(array);
   if(array){
   return array 

   }
   else{
    return []
   }
}
const initialState = {
    cart: getLocalItem() ,
    value: "",
    // edit: false,
    editModes:{}
}
const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)


    const getValue = (e) => {
        console.log(e.target.value)
        let { value } = e.target
        dispatch({ type: "GET_VALUE", payload: value })
    }

    const mapValue = () => {
        try {
            let array = getLocalItem();
            array.push(state.value)
            localStorage.setItem("todo",JSON.stringify(array));
            console.log("Value stored in local storage",localStorage);
          } catch (error) {
            console.error("Error storing value in local storage:", error);
          }
        dispatch({ type: "MAP_VALUE" })

    }

    const Delete = (e) => {
        console.log(e);
        dispatch({ type: "DELETE", payload: e })
    }

    const Edit = (event,i) => {
        const parent = event.target.parentNode.parentNode.parentNode.querySelector(".notes")
        const parentVal = event.target.parentNode.parentNode.parentNode.querySelector(".notes").value
        console.log(i);
        dispatch({ type: "EDIT", payload: { parent, parentVal,i } })
    }

    const editing = (e, i) => {
        const updatedCart = [...state.cart];
        updatedCart[i] = e.target.value;
        dispatch({ type: "EDITING", payload: updatedCart })

    }

    const DoneEditing = () => {
        dispatch({ type: "DONE_EDITING" })

    }

    const DeleteAll=()=>{
        dispatch({type: "DELETE_ALL"})
    }

    return (<CartContext.Provider value={{ state, getValue, mapValue, Delete, Edit, editing, DoneEditing,DeleteAll }}>{children}</CartContext.Provider>)
}

CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const UseCartContext = () => {
    return useContext(CartContext)
}

export { CartContextProvider, UseCartContext }