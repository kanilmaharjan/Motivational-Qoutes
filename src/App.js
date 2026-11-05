import React, { useState } from 'react'
import ItemQuotes from './ItemQuotes'



const App = () => {
    const[items, setItems]=useState([])

    const fetchdata=()=>{
      return fetch("https://jsonguide.technologychannel.org/quotes.json")
      .then((response)=>response.json())
      .then((data)=>{
        setItems(data)
      })
    }

  return (
    <div>
        <button onClick={()=>fetchdata()}>fetch</button>
        {items.map((item)=><ItemQuotes from={item.from} text={item.text}/>)}
    </div>
  )
}

export default App