
import './App.css'
import Main from './components/Main'



function App() {
  const products = [{ id: 1, name: "Aydan" }, { id: 2, name: "Zakir" }]

  return (
    <>
      <Main products={products} />

    </>
  )
}

export default App
