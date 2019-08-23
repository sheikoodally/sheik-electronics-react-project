import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Electronics from './components/Electronics';
import Home from './components/Home.js';
import Phones from './components/Phones';
import Computers from './components/Computers';
import Errors from './components/Errors';
import './App.css';

import {Route, Switch} from 'react-router-dom';

function App() {

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route  path="/" component={Home}/>
          <Route exact path="/electronics" component={Electronics}/>
          <Route exact path="/phones" component={Phones}/>
          <Route exact path="/computers" component={Computers}/>
          <Route Component={Errors}/>
        </Switch>

        <Footer/>
      </div>
    );
}
export default App;
