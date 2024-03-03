//import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Headers from './components/Headers'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <header className="header">
      <Headers />
    </header>
    <main className="main">
      <Main />
    </main>
   </>
  )
}

export default App
