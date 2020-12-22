import React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {savePayment} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";




function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');



    const dispatch = useDispatch();




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('placeorder');
    }


    return <div>
        <CheckoutSteps step1 step2 step3/>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Payment</h2>
                    </li>

                   <li>
                       <div>
                           <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(event) => setPaymentMethod(event.target.value)}/>
                           <label htmlFor="paymentMethod">
                               Paypal
                           </label>
                       </div>

                   </li>

                    <li>
                        <button type="submit" className="button primary">Continue</button>
                    </li>

                </ul>
            </form>
        </div>
    </div>

}
export default PaymentScreen;

