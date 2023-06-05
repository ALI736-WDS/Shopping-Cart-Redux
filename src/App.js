import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';  // V5.2.0
// import { Switch, Routes, Navigate } from 'react-router-dom';  // V6
import { Provider } from 'react-redux';

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
// import ProductContextProvider from './context/ProductContextProvider';
// import CartContextProvider from './context/CartContextProvider';

// Redux
import store from './redux/store';


function App() {
  return (
    // <ProductContextProvider>
    // <CartContextProvider>
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Route path="/cart" component={ShopCart} />
        <Redirect to="/products" />
      </Switch>
    </Provider>
    // </CartContextProvider>
    // </ProductContextProvider>
  );
}

export default App;

// (V6)
//  <ProductContextProvider>
//   <CartContextProvider>
//     <Navbar />
//     <Routes>
//       <Route path="/products/:id" element={<ProductDetails />} />
//       <Route path="/products" element={<Store />} />
//       <Route path="/cart" element={<ShopCart />} />
//       <Route path="*" element={<Navigate to="/products" />} />
//       </Routes>
//   </CartContextProvider>
// </ProductContextProvider> 