import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addition } from './slices'
import Usereducer from './components/UseReducer'
import Userdata from './components/Userdata'

function App() {
  const [num, setNum] = useState({
    num1:"",
    num2:""
  })
  const handleChange=(e)=>{
    setNum({...num,[e.target.name]:e.target.value})
    console.log(num)
  }
const values = useSelector(state=>state.counterSlice)
const dispatch = useDispatch()

const Add=()=>{
  dispatch(addition(num))
}


  return (
   
    <div className="App">
      <Userdata/>
      {/* <Usereducer/> */}
  {/* <input type="number" name='num1' onChange={handleChange}/> <br />
  <input type="number" name='num2' onChange={handleChange}/> <br />
  <button type='button' onClick={Add}>addition</button>
  <h1>{values.value}</h1> */}

      
    </div>
  )
}

export default App
