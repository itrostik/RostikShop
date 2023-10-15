import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import CartNotFound from "./pages/CartNotFound";
function App() {
  const [count, setCount] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(0);
  const [gender, setGender] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  return (
    <div className="wrapper __container">
      <Header
        count={count}
        currentPrice={currentPrice}
        gender={gender}
        setGender={setGender}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              count={count}
              currentPrice={currentPrice}
              setCount={setCount}
              setCurrentPrice={setCurrentPrice}
              gender={gender}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            cart.length !== 0 ? (
              <Cart
                cart={cart}
                setCart={setCart}
                setCount={setCount}
                count={count}
                currentPrice={currentPrice}
                setCurrentPrice={setCurrentPrice}
              />
            ) : (
              <CartNotFound />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
