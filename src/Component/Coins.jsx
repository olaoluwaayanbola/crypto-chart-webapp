import React from 'react'
import ReactDOM from 'react-dom'
const Coins = (props) => {
    return (
        <div className='Container'>
            <div className='CoinListLight'>
                <div className='CoinContainerOne'>
                    <span>
                        <img src={props.items.image} alt='crypto' />
                        <span className='itmeName'>{props.items.name}</span>
                    </span>
                    <p className='CoinSymbol'>{props.items.symbol}</p>
                </div>
                <div className='CoinContainerTwo'>
                    <p>${props.items.current_price.toLocaleString()}</p>
                    <p>${props.items.total_volume.toLocaleString()}</p>
                    <p className={props.items.price_change_percentage_24h < 0 ? 'red' : "green"}>{props.items.price_change_percentage_24h.toFixed(2)}%</p>
                    <p>Mkt Cap:{props.items.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coins
