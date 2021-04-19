import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'

function CountriesList () {
   
       return (       
           <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
               <div class="list-group">   
               {countries.map((country) => {
                    return <Link 
                    key={country.cca3} 
                    to={`/${country.cca3}`} 
                    className='list-group-item list-group-item-action'>
                        {`${country.flag} ${country.name.common}`}
                        </Link>   
                })}                
               </div>
           </div>
       )
}
export default CountriesList
