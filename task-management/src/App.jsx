import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TaskList />}></Route>
        <Route path='/task/:id' element={<TaskDetail />}/>
      </Routes>
    </>
  )
}

export default App
