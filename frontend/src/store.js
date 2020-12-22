import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {
    productDeleteReducer,
    productDetailsReducer,
    productListReducer,
    productSaveReducer
} from "./reducers/productReducers";
import thunk from "redux-thunk";
import {cartReducer} from "./reducers/cartReducers";
import Cookie from "js-cookie";
import {userRegisterReducer, userSigninReducer} from "./reducers/userReducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart: {cartItems, shipping: {}, payment: {}}, userSignin:{userInfo}};
const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
})

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true, traceLimit: 25
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,  enhancer);
export default store;