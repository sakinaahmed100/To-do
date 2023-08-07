export default function CartReducer(state, action) {
    switch (action.type) {
        case "GET_VALUE":
            console.log(action.payload);

            return {
                ...state,
                value: action.payload
            }
        case "MAP_VALUE":
            return {
                ...state,
                cart: [
                    ...state.cart,
                    state.value
                ],
                value: ""
            }

        case "DELETE": {
            console.log(state.cart);
            let updatedCard = state.cart.filter((e, i) => {
                return (i !== action.payload)
            })
            try {
                localStorage.setItem("todo", JSON.stringify(updatedCard));
                console.log("Updated cart stored in local storage", localStorage);
            } catch (error) {
                console.error("Error storing updated cart in local storage:", error);
            }
            return {
                ...state,
                cart: updatedCard
            }
        }


        case "EDIT": {
            console.log(action.payload);
            let editInput = action.payload.parent
            editInput.focus()
            let editedValue = action.payload.parentVal
            const updatedCart = state.cart.map((item) =>
                item === editedValue ? editedValue : item
            );
            const editedIndex = action.payload.i;
            const updatedEditModes = { ...state.editModes };
            console.log(updatedEditModes, editedIndex);
            updatedEditModes[editedIndex] = !updatedEditModes[editedIndex];
            return {
                ...state,
                cart: updatedCart,
                editModes: updatedEditModes,
            }
        }

        case "EDITING":
            return {
                ...state,
                cart: action.payload
            }


        case "DONE_EDITING": {
            const updatedEditModes = { ...state.editModes };
            return {
                ...state,
                editModes: !updatedEditModes,

            }
        }
        case "DELETE_ALL":

            localStorage.setItem("todo", JSON.stringify([]));
            return {
                ...state,
                cart: []
            }


        default:
            state
    }
}