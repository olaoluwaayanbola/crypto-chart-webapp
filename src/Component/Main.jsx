import React from 'react'
import ReactDOM from 'react-dom'
import Coins from './Coins'
import { useEffect } from 'react'
import { useState } from 'react'

export default function MainX(){
    const [state, setState] = React.useState("")
    const [data, setData] = React.useState([])

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'`
        fetch(url)
            .then(res => res.json())
            .then(info => setData(info))
    }, [])
    function Handles(event) {
        setState(event.target.value)
    }

    const valueSearched = data.filter(items =>
        items.name.toLowerCase().includes(state.toLowerCase())
    );

    return (
        <div id='inputBoxContainer'>
            <input
                placeholder='Search..'
                name='Search'
                className='Search'
                value={state}
                onChange={Handles}
            >
            </input>
            {
                valueSearched.map((items) => (<Coins key={items.id} items={items}></Coins>))
            }

        </div>
    )
}
