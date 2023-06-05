import React/* , { useContext } */ from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Context
// import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    // const { state, dispatch } = useContext(CartContext);  //dispatch inja estrefade nemishe pas niazi nist neveshte beshe
    // const { state } = useContext(CartContext); //maghadire cartContext, state va dispatch bud ke destructure konim
    const state = useSelector(state => state.cartState);  //state(rootReducer, store), cartState(cartReducer)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products"> Products </Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                    <span> {state.itemsCounter} </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;