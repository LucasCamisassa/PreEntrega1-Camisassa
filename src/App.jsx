import React from 'react';
import './App.css';
import NavBar from "../src/components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo="BIENVENIDO A NUESTRO NEGOCIO ONLINE"/>
    </>
  )
}

export default App
