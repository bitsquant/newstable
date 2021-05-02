import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Dashboard from './Dashboard';


class App extends Component {
 render() {
  return (
   <div className="App">

    <div className="row">
 
	    <div className="col-12 col-s-12">
	    
	      <Route exact path="/" component={Dashboard} />

	    </div>
    </div>

   </div>
  );
 }
}
export default App;