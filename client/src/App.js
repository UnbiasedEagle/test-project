import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Listing from './pages/Listing'
import Input from './pages/Input'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Navbar></Navbar>
          <Switch>
            <Route exact path='/create' component={Input}></Route>
            <Route exact path='/' component={Listing}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
