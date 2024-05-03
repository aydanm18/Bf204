
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [form,setForm]=useState("register")
  return (
    <>
     <Login/>
     <Register/>
    </>
  )
}

export default App
