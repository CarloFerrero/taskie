import { Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </>
  )
}

export default App
