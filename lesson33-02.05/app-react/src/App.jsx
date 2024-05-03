
import { useEffect, useState } from 'react';
import './App.css'
import ProductTable from './components/ProductTable'
import { getAllData } from './services';

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      getAllData().then((response) => {
          setProduct(response)
          console.log(response)
      }).catch((err) => {
          console.log(err)
      }).finally(() => {
          setLoading(false);
      })
  }, [])

  return (
    <>
    <ProductTable product={product} setProduct={setProduct}/>
    </>
  )
}

export default App
