import axios from "axios";
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: CART_ADD_ITEM, payload:{
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));


    } catch (e) {

    }
}

const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId})
}

export {addToCart, removeFromCart};