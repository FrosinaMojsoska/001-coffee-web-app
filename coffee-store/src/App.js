import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import CoffeeSection from "./components/Coffee/CoffeeSection";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const closeCartHandler=()=>{
    setIsCartShown(false);
  }
  return (
    <CartProvider>
      <Header onModalClick={showCartHandler} />
      <main>
      <CoffeeSection />
      </main>
      {isCartShown && <Cart onCloseCart={closeCartHandler}/>}
    </CartProvider>
  );
}

export default App;
