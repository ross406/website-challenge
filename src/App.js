import React from 'react';

import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
      <div id='preloader'>
        <div id='loader'></div>
      </div>
    </div>
  );
}

export default App;
