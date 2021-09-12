import {ADD_TO_CART, REMOVE_FROM_CART} from "../types";

export const addToCart = (product, size, quantity, description) => (dispatch , getState) => {
    const  cartItems = getState().cart.cartItems.slice() ;
    let alreadyExists = false;
        Array.prototype.forEach.call(cartItems, function(x,i) {
        if(x.item.id === product.id &&  x.size === size 
            && x.description === description){
                alreadyExists = true;
                console.log("size:" + size);
                console.log(" x.size:" +  x.size);
                cartItems[i].quantity +=  quantity;
        }

    });
    if(!alreadyExists){
        console.log("New") ;
        cartItems.push({"item": product , quantity :quantity, size : size, description: description });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: {cartItems}
    });

    localStorage.setItem("cartItems",JSON.stringify(cartItems));
};

export const removeFromCart = (items,product) => (dispatch) => {

    const cartItems = items.slice().filter((x) => 
        x.item.id !== product.id
    );
    dispatch({ type: REMOVE_FROM_CART, payload : {cartItems}});

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

}