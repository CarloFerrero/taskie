import { Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import SchoolAttendance from "./example/conditionalRendering"
import Layout from "./components/Layout"
import ExampleUseState from "./example/useState"
import RefDataExample from "./example/useRef"
import EffectExample from "./example/useEffect"
import EditTask from "./pages/EditTask"
import TaskList from "./pages/TaskList"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<AddTask />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/example" element={<SchoolAttendance />} />
        <Route path="/example-usestate" element={<ExampleUseState />} />
        <Route path="/example-useref" element={<RefDataExample />} />
        <Route path="/example-useEffect" element={<EffectExample />} />
      </Routes>
    </Layout>
  )
}

export default App
