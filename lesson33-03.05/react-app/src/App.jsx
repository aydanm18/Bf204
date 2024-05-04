
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [form, setForm] = useState("register");
  // const [clasroom, setClasroom] = useState(null);
   
  // function handleLogin(){
  // setForm(null);
  // setClasroom('Classe');
  // }

  return (
    <>
      {form == 'register' ? (
        <Register form={form} setForm={setForm} />
      ) : (
        <Login form={form} setForm={setForm} />
      )}
    </>
  )
}

export default App
