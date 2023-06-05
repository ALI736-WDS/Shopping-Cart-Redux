import React, { createContext, useReducer } from 'react';


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

//meghdare avalie total 0 hast, product yek mahsule dakhele selectedItems: [] va harbar quantity ro + total mikone va mirize to total
//... va dar nahayet jame hame mahsulat mire to (itemsCounter)
//in total(total, product) rabti be total initialState nadare va itemsCounter male initialState hast
const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemsCounter, total }
}

const cartReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,  //ke etelaat ghabl hazf nashan
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false  //vaghti karbar checkout va tasfie kard, buy more zad va dobare omad chizi be sabad ezafe kard
                //...vaghtii bere to sabad neveshte checkout shod va nabayad intor bashe pas false mizarim ke chckout nayad
            }
        case "REMOVE_ITEM":  //satle zobale: products ro bargardun ke id ona ba id in ke click shode barabar nabashe, yani in product hazf mishe
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id) //id product === id click shode
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id) //id product === id click shode
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <div>
            {/* <CartContext.Provider value={{state: state, dispatch: dispatch}}> */}
            <CartContext.Provider value={{ state, dispatch }}> {/* ecma script6: agar key va value yeki budan, khodam tashkhis midam */}
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;