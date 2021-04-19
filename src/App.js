import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
// import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

    return (
      <div className="App">
        <Navbar />           

        <div className="container">
          <div className="row">
              {/* <CountriesList countries= { countries } /> */}
              <CountriesList path="/" />
              <Route path="/:cca3" component={CountryDetails} />  
          </div>
        </div>
            
      </div>
    );
}

export default App;
