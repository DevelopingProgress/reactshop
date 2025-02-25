import React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {saveShipping} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";




function ShippingScreen(props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [country, setCountry] = useState('');


    const dispatch = useDispatch();




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, country}));
        props.history.push('payment');
    }


    return <div>
        <CheckoutSteps step1 step2/>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Shipping</h2>
                    </li>

                    <li>
                        <label htmlFor="address">
                            Address
                        </label>
                        <input type="text" name="address" id="address" onChange={(event) => setAddress(event.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" id="city" onChange={(event) => setCity(event.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="postalCode">
                            Postal Code
                        </label>
                        <input type="text" name="postalCode" id="postalCode" onChange={(event) => setpostalCode(event.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" id="country" onChange={(event) => setCountry(event.target.value)}/>
                    </li>

                    <li>
                        <button type="submit" className="button primary">Continue</button>
                    </li>

                </ul>
            </form>
        </div>
    </div>

}
export default ShippingScreen;

