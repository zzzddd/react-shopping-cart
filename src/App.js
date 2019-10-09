import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import {ProductContext} from "./contexts/ProductContext";
import {CartContext } from "./contexts/CartContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
 setCart([...cart, item]); 
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{cart}}>
          <Navigation cart={cart} />

          {/* Routes */}
          {/* <Route
          exact
          path="/"
          render={() => <Products products={products} addItem={addItem} />}
        /> */}
          <Route exact path="/" component={Products} />
          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}

          <Route path="/cart" component={ShoppingCart}  />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
