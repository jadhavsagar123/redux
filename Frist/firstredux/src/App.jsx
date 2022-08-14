import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount } from './slice'
import { addToDo } from './slice/authSlice'

function App() {
  const [task , setTask] =useState([])
const toDo=(e)=>{
  setTask(e.target.value)
}

  const state =useSelector(state=>state.counterSlice)
  const dispatch = useDispatch()
  const state1 =useSelector(state=>state.authSlice)

const handleClick=()=>{
  dispatch(increment())
}

const handledecrement =()=>{
  dispatch(decrement())
}

const handleincrementbyvalue=()=>{
  dispatch(incrementByAmount(10000000))
}



const handleClick1=()=>{
  dispatch(addToDo(task))

}


  return (


    <div className="App">
      <h1>{state.value}</h1>
      <button onClick={handleClick}> increment</button> <br />
     
      
      <button onClick={handledecrement}> decrement</button> <br />
      <button onClick={handleincrementbyvalue}> increment by value</button> <br />

      <input type="text" name="task" onChange={toDo}/> <br />
      <button onClick={handleClick1}> increment1</button> <br />

      
      {/* {
      state1.values.map((ele,i)=>{
      
      <li key={i}>{ele}</li>
      })
      }  
 */}

      <li>{state1.values}</li>

    </div>
  )
}

export default App
