import React,{useReducer} from 'react'

const initalState={
  value:0

}


const Usereducer = () => {



const reducer=(state,action)=>{

 

  // reducers are something where you have to write the state management logic


    // Write the logic to modify the stae that we declared above

    switch (action){

        case "INCREMENT":
           
            return {...state,value:state.value+1}

            case "DECREMENT":
           
              return {...state,value:state.value-1} 

              case "BYVALUE":
           
                return {...state,value:state.value-1}     
        
        default :
          return state    

    }

}

  const [state,dispatch] = useReducer(reducer,initalState);


  const increment=()=>{
    dispatch("INCREMENT");

  }

  const decrement=()=>{
    dispatch("DECREMENT");
  }

  const byValue=()=>{
    
  }
  return (
    <div>
     <h1>{state.value}</h1> 

<button onClick={increment}>
Increment
</button>



<button onClick={decrement}>
Decrement
</button> <br /> <br />

<input type="text" />
<button onClick={byValue}></button>

    </div>


 
  )
}

export default Usereducer