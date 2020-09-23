import React, { Component } from "react";
import Navigate from './components/Routing/Navigate';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


export default function App() {
    return (
      <>
      <Header />
        <Navigate />
        <Footer />
      </>
    );
}