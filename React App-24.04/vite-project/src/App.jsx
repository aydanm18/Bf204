
import './App.css'
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Cards from "./components/cards";
import { products } from "./data/products";
function App() {
    let fullName = "Babayeva Aydan"
    return (

      <>
        <Header fullName={fullName} />
        <Cards products={products} />
        <Footer />
      </>

    )
  }

export default App
