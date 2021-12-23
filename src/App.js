import { useEffect, useState } from 'react';
import Coin from './Components/Coin';
import './App.css'

const axios = require('axios')



function App() {
const [coins, setCoins  ] = useState([])
const [search, setSearch] = useState('')

  useEffect( () =>
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then( res => {
   setCoins(res.data)
    }
    ),[])


const searchCripto = (e) => {
  setSearch(e)
}
const filteredCoins = coins.filter((coin )=> 
  coin.name.toLowerCase().includes(search.toLowerCase())
)


  return (
    <div>
      <nav className="navbar  bg-dark">
        <h1 className="navbar-brand">Crypto4u</h1>
        <form className="form-inline">
          <input placeholder='Seach your cripto' className="form-control mr-sm-2" type='text' onChange={ (e) => searchCripto(e.target.value)}></input>
        </form>
      </nav>
      
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {filteredCoins.map( coin  =>
          <Coin 
            key = {coin.id}
            name ={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            volumen={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            lastUpdate={coin.last_updated}
            /> )}
      </div>

    </div>
  );
}

export default App;
