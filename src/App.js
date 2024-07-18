
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
}

export default App;
