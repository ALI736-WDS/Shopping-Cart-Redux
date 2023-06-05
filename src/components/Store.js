import React, { /* useContext ,*/ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';
import Loader from './shared/Loader';

// Context
// import { ProductsContext } from '../context/ProductContextProvider';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

// Style
import styles from "./Store.module.css";

const Store = () => {

    // const products = useContext(ProductsContext)
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)  //state.prodocstate(rootReducer, initialState of productsReducer)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        // <div className={styles.container}>
        //     {
        //         products.map(prodoct => <Product
        //             key={prodoct.id}
        //             productData={prodoct}  //props productData send to product.js
        //         />)
        //     }
        // </div>

        <div className={styles.container}>
            {
                productsState.loading ?
                    <Loader /> :
                    productsState.error ?
                        <p> Something went wrong </p> :
                        productsState.products.map(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }
        </div>
    );
};

export default Store;