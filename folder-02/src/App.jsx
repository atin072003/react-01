import React from 'react'
import Card from './componennts/Card'

const App = () => {
  return (
    <div>
      <Card user = "Ant Esports" img = "https://images.unsplash.com/photo-1769784496637-252665a3b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Ryzen" version = {5} img ="https://images.unsplash.com/photo-1770445651379-379a183bb9ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D"/>
      
      
    </div>
  )
}

export default App
