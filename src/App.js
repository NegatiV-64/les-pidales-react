import React, { useState, useEffect } from 'react';

import Loader from './components/UI/Loader';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

import './base.css';
import './resources/fonts/fonts.css'
import './resources/bootstrap-grid.min.css'


const App = () => {

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {

    document.querySelector('body').style.overflow = "hidden"

    setLoaderState(true)

    let timer = setTimeout(() => {
      setLoaderState(false)
      document.querySelector('body').style.overflow = "visible"
    }, 1500);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <React.Fragment>
      {loaderState && <Loader></Loader>}
      <Header />

      <Footer />
    </React.Fragment>
  );
}

export default App;