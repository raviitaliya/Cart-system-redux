import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Cart from "./pages/Cart"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
      </Routes>


    </div>
  )
}

export default App