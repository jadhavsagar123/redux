import './App.css'
import Books from './components/Books';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Books />}/>
       </Routes>
    </div>
  )
}

export default App