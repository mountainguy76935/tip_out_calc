import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./pages/main_page/main_page.component"
import './App.css';


function App() {
  return (
  <div className = "whole_thing">
    <Switch>
      <Route exact path = "/" component={MainPage}/>
    </Switch>
  </div>
  )
}

export default App;
