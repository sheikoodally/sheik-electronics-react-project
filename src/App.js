import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Electronics from './components/Electronics';
import ShoppingItems from './data/ShoppingItems'
import Home from './components/Home.js'
import './App.css';

class App extends Component {
  render() {

    const shopItems = ShoppingItems;

    this.state = { 
      shopItems
    }

    return (
      <div className="App">
          <Header/>
          <Home items = {this.state.shopItems} />
          <Electronics items = {this.state.shopItems}/>
          <Footer/>
      </div>
    );
  }
}
export default App;
