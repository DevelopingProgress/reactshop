import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import {signin} from "../actions/userActions";




function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() =>{

        if (userInfo){
            props.history.push("/");
        }

        return () =>{
            //
        };
    },[userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }


    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                   <h2>Sign-in</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
                </li>
                <li>
                    <button type="submit" className="button primary">Sign In</button>
                </li>
                <li>
                    Not a member yet?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your account!</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;

