import {Route, Routes} from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksForm from './pages/TasksForm'
import NotFound from './pages/NotFound'

function app() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage/>} />
      <Route path="/new" element={<TasksForm/>} />
      <Route path="*" element={<NotFound/>} />     
    </Routes>
  )
}

export default app;
