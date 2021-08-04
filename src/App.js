import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import CartProvider from './react-context/CartProvider';
import Order from './components/Order/Order';
import Cheque from './components/Cheque/Cheque';
import Loader from './components/UI/Loader';
import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header';
import FoodMenu from './components/Food/FoodMenu';
import Footer from './components/Layouts/Footer';

import './base.css';
import './resources/fonts/fonts.css'
import './resources/bootstrap-grid.min.css'


const App = () => {
  const [loaderState, setLoaderState] = useState(false);

  const [cartVisable, setCartVisable] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [chequeVisible, setChequeVisible] = useState(false)

  function onCartShowHandler() {
    setCartVisable(true)
  }

  function onCartCloseHandler() {
    setCartVisable(false)
  }

  function onOrderShowHandler() {
    setOrderVisible(true);
  }

  function onOrderCloseHandler() {
    setOrderVisible(false)
  }

  function onChequeShowHandler() {
    setChequeVisible(true);
  }

  function onChequeCloseHandler() {
    setChequeVisible(false);
  }

  useEffect(() => {
    document.querySelector('body').style.overflow = "hidden"
    setLoaderState(true)
    let timer = setTimeout(() => {
      setLoaderState(false)
      document.querySelector('body').style.overflow = "visible"
    }, 10);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <CartProvider>
      {loaderState && <Loader></Loader>}
      {cartVisable && <Cart onCartClose={onCartCloseHandler} onOrderShow={onOrderShowHandler}/>}
      {orderVisible && <Order onOrderClose={onOrderCloseHandler} onChequeShow={onChequeShowHandler}/>}
      {chequeVisible && <Cheque onChequeClose={onChequeCloseHandler}/>}
      <Header onCartShow={onCartShowHandler} />
      <FoodMenu />
      <Footer />
    </CartProvider>
  );
}

export default App;