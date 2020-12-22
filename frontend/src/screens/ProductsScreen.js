import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import {deleteProduct, listProducts, saveProduct} from "../actions/productActions";




function ProductsScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    useEffect(() =>{
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts());

        return () =>{
            //
        };
    },[successSave, successDelete]);

    const openModal = (product) =>{
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setImage(product.image);
        setPrice(product.price);
        setCategory(product.category);
        setBrand(product.brand);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name, image, price, category, brand,
            countInStock, description}));
    }

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }


    return <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button className="button primary" onClick={() => openModal({})}>Create Product</button>
        </div>
        {modalVisible && <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Product</h2>
                    </li>
                    <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" value={name} name="name" id="name" onChange={(event) => setName(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="name">
                            Image
                        </label>
                        <input type="text" value={image} name="image" id="image" onChange={(event) => setImage(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" value={price} name="price" id="price" onChange={(event) => setPrice(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="category">
                            Category
                        </label>
                        <input type="text" value={category} name="category" id="category" onChange={(event) => setCategory(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="brand">
                            Brand
                        </label>
                        <input type="text" value={brand} name="brand" id="brand" onChange={(event) => setBrand(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="countInStock">
                            Count in Stock
                        </label>
                        <input type="text" value={countInStock} name="countInStock" id="countInStock" onChange={(event) => setCountInStock(event.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="description">
                            Description
                        </label>
                        <textarea name="description" value={description} id="description" onChange={(event) => setDescription(event.target.value)}/>
                    </li>
                    <li>
                        <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
                    </li>
                    <button className="button secondary" onClick={() => setModalVisible(false)}>Back</button>
                </ul>
            </form>
        </div>}


        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product => (<tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <button className="button" onClick={() => openModal(product)}>Edit</button>
                            {' '}
                            <button className="button" onClick={() => deleteHandler(product)}>Delete</button>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    </div>




}
export default ProductsScreen;

