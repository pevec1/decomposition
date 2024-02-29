//import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import Headers from './components/Headers'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <header className="header">
      <Headers />
    </header>
    <Logo />
   </>
  )
}

export default App
