import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes,Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>

      </Routes>


    </div>
  )
}

export default App