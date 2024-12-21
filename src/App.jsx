import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ShoesStore/Home";
import Cart from "./ShoesStore/Cart";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ProductPopup from "./ShoesStore/ProductPopup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <ProductPopup />
    </Provider>
  );
}

export default App;
