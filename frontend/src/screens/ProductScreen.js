import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../actions/productActions";
import {useEffect} from "react";
import {useState} from "react";
function ProductScreen(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(detailsProduct(props.match.params.id));

        return () =>{
            //
        };
    },[])


    const handleAddtoCart = () =>{
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }


    return <div>
        <div>
            <Link to="/">Back to home</Link>
        </div>
        {loading ? <div>Loading...</div>:
            error ? <div>{error}</div>: (<div className="details">
                <div className="details-image">
                    <img src={process.env.PUBLIC_URL + '/images/' + product.image} alt="productimg"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.brand}
                        </li>
                        <li>
                            Price:<b>${product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div className="details-description">
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Status: {
                            product.countInStock > 0 ? "In Stock" :
                                "Out of stock"
                        }
                        </li>
                        <li>
                            Qty: {
                            product.countInStock > 0 && <select value={qty} onChange={(e) => {setQty(e.target.value)} }>
                                {[...Array(product.countInStock).keys()].map(x =>
                                    <option key={x+1} value={x+1}>{x+1}</option>)}
                            </select>}
                            {
                                product.countInStock === 0 && "0"
                            }
                        </li>
                        <li>
                            {
                                product.countInStock > 0 && <button onClick={handleAddtoCart} className="button primary">Add to Cart</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>)}
        </div>
}
export default ProductScreen;

