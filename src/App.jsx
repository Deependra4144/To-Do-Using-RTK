import HomePage from "./components/HomePage"
import DeshBord from "./components/DeshBord"
import { Route, Routes } from "react-router-dom"
import AllTodos from "./components/AllTodos"
import './assets/Glass.css'
function App() {
  return (
    <div className="h-screen bg">
    <DeshBord/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/all-todos" element={<AllTodos/>}></Route>
    </Routes>
     {/* <HomePage/> */}
    </div>
  )
}

export default App
