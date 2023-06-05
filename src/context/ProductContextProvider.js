import React, { useState, useEffect, createContext } from 'react';

// API
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

// const ProductContextProvider = (props) => {
const ProductContextProvider = ({ children }) => {  //destructure props

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    }, [])


    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;