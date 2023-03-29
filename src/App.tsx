import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Location } from "@remix-run/router";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  /* reset css */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Manrope', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a{
    text-decoration: none;
    color: var(--primary-black);
  }

  /* input[type="radio"]:checked {
  background-color: #1e90ff !important;
  color: #fff !important;
  border-color: #1e90ff !important;
}

  input[type="radio"]:checked + label {
  font-weight: bold;
} */

  /* global styles */
  :root{
    --primary-orange : #D87D4A;
    --secondary-orange : #FBAF85;
    --primary-black  :#000000;
    --secondary-black :#101010;
    --primary-grey : #F1F1F1;
    --grayish-white : #FAFAFA;
    --white : #FFFFFF;
  }
`;

export const GlobalContainer = styled.div<{ location: Location }>`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

// impot layouts
import { Header, Footer } from "./layouts";

// import pages
import { UniqueCategory, Checkout, Detail, Home } from "./pages";

// import component

import { Cart } from "./components";

export type cartItemsProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  counterValue: number;
};

function App() {
  //
  const [cartItems, setCartItems] = useState<cartItemsProps[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [showCart, setShowCart] = useState(false);

  const location = useLocation();
  return (
    <GlobalContainer location={location}>
      <GlobalStyles />
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/category/:categoryName"
          element={<UniqueCategory />}
        ></Route>
        <Route
          path="/productDetail/:detailName"
          element={<Detail setCartItems={setCartItems} cartItems={cartItems} />}
        ></Route>
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>
      </Routes>
      {/* Cart Component */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowCart={setShowCart}
        />
      )}
      <Footer showCart={showCart} />
    </GlobalContainer>
  );
}

export default App;
