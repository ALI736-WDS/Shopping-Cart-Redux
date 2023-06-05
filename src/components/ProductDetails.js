import React /*, { useContext } */ from 'react';
import { Link } from 'react-router-dom';  // V5.2.0
// import { Link, useParams } from 'react-router-dom';  // V6
import { useSelector } from 'react-redux';

// Context
// import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const id = props.match.params.id;  // V5.2.0
    // const data = useContext(ProductsContext);
    const data = useSelector(state => state.productsState.products);  //state(rootReducer ,store),productsState:productsReducer(products of initialState)
    const product = data[id - 1];  //index yeki kamtar az id hast chun index az 0 shoru mishe
    const { image, title, description, price, category } = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3> {title} </h3>
                <p className={styles.description}> {description} </p>
                <p className={styles.category}><span> Category: </span> {category} </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}> {price} $ </span>
                    <Link to="/product"> Back to shop </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


// (V6)
// const params = useParams();
// const id = params.id;