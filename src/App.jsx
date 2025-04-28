import { useState } from 'react'
import './App.css'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import Google from './Authentication/Google'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup/>
      <Login/>
      <Google/>

      
    </>
  )
}

export default App
