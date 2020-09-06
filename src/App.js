import React from "react";
import './App.css'
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom'
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Appbar from "./Components/Appbar/Appbar";
function App() {
 
  return (
    
    <Router>
      <Appbar></Appbar>
      
      <Switch>
      <Route exact path="/post">
        <Home></Home>
      </Route>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/post/:id">
        <Details></Details>
      </Route>

    </Switch>
    
    
    </Router>

  );
}

export default App
