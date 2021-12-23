import React from 'react';
import './Coin.css'



const Coin = ({id,symbol, name, price, volumen, image, priceChange, lastUpdate}) => {
    
    
    

    return(
        <div className="col" key={id}>
          <div className="card h-100 w-100 bg-dark ">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name} </h5>
              <h6>{symbol}</h6>
              <p className="card-text">USD$: {price}</p>
              <p>{volumen.toLocaleString()}</p>
            </div>
            <div >
            <div className='card-footer' style={priceChange.toFixed(2) > 0 ? {backgroundColor:'green'} : {backgroundColor:'red'}}>
               <h5> {priceChange.toFixed(2)}%</h5>
            </div>
              
              <small> Actualizado: {new Date(lastUpdate).toLocaleString()}</small>
             </div>
          </div>
        </div>


    )}




export default Coin