import { Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    avatar: 'https://avatars.githubusercontent.com/u/61538469?v=4'
  };
  return (
    <>
      <Layout user={user}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
