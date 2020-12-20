import React from 'react';
import Hero from './components/Hero';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose Your Favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treat For You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
