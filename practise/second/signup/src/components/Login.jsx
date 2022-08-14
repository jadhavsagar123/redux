import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { loginAction } from '../thunk/auth';
import Alert from '@mui/material/Alert';


// Form validation 

const Login = () => {
  const dispatch=useDispatch();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState({
    show:false,
    message:""
  });

    const [state,setState]=useState({
        name:"",
        email:"",
        password:""

    })

    const handleChange=(event)=>{

        setState({
            ...state,
            [event.target.name]:event.target.value

        })

    }


    const handleClick=()=>{


        if(state.email.length!=0 && state.password.length!=0)
        {

      
      dispatch(loginAction(state)).then(response=>{

        //localS
        if(response.payload.data.message=="Login success")
        {

            localStorage.setItem("token",response.payload.data.token)
         setSuccess(true);
         setState({
           name:"",
         email:"",
         password:""
         })
        }
      })
    }

    else{
        setError({
            show:true,
            message:"Please Fill All the fields"
        })
        //alert("Please fill all the fields");
    }
    }
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div  style={{marginLeft:"500px"}}>
       <h1>Login Here</h1>
       {
        success?
       <Alert severity="success">Login Success</Alert>:""

       }

{
        error.show?
       <Alert severity="error">{error.message}</Alert>:""

       }

       </div>
  

  
   

      <TextField  value={state.email} name='email' onChange={handleChange}  label="Email" variant="standard" />
      <br/>

      <TextField value={state.password} name='password'  onChange={handleChange} label="Password" variant="standard" />
      <br/>

      <Button variant="contained"  onClick={handleClick}>Login</Button>

    </Box>
    </div>
  )
}

export default Login