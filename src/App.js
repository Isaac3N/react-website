import React from 'react';
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Footer from './components/pages/HomePage/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
