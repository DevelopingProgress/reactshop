import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import {useSelector} from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;


    const openMenu = ()=>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = ()=>{
        document.querySelector(".sidebar").classList.remove("open");
    }

  return (
      <Router>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>
                      ☰
                  </button>
                  <Link to="/">amazona</Link>
              </div>
              <div className="header-links">
                  <Link to={'/cart/'}>Cart</Link>
                  {
                      userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                          <Link to="/signin">Sign in</Link>
                  }
              </div>
          </header>
          <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                  <li>
                      <a href="index.html">Pants</a>
                  </li>
                  <li>
                      <a href="index.html">Shirts</a>
                  </li>
              </ul>
          </aside>
          <main className="main">
              <div className="content">
                  <Route path="/placeorder" component={PlaceOrderScreen}/>
                  <Route path="/payment" component={PaymentScreen}/>
                  <Route path="/shipping" component={ShippingScreen}/>
                  <Route path="/products" component={ProductsScreen}/>
                  <Route path="/register" component={RegisterScreen}/>
                  <Route path="/signin" component={SigninScreen}/>
                  <Route path="/cart/:id?" component={CartScreen}/>
                  <Route path="/product/:id" component={ProductScreen}/>
                  <Route path="/" exact={true} component={HomeScreen}/>

              </div>
          </main>
          <footer className="footer">
              All rights reserved.
          </footer>
      </div>
      </Router>
  );
}

export default App;
