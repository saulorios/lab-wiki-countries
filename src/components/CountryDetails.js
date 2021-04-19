import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'

function CountryDetails(props) {

        const foundCountry = countries.find((country) => {
          return country.cca3 === props.match.params.cca3 
        })  

     

        return (
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{width: "30%"}}>Capital</td>
                      <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {foundCountry.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                            {foundCountry.borders.map((border) => {
                                let country = countries.find((x) => x.cca3 === border);
                                return <li><Link to={`/${border}`}>{country.name.common}</Link></li> 
                            })}
                                                  
                        </ul>
                        {/* {borders()} */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
        )  

}
export default CountryDetails