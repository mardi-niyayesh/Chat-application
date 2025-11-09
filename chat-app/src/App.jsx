//components
import Login from "./components/Login"
import {Route,Routes} from "react-router-dom"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App

