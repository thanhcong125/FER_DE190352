import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
   <div className="App bg-dark">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;