import './App.css'
import Addtodo from './components/AddTodo';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Addtodo />}/>
       </Routes>
    </div>
  )
}

export default App