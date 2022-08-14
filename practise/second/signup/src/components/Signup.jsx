import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { signupAction } from '../thunk/auth';
import Alert from '@mui/material/Alert';


const Signup = () => {
  const dispatch=useDispatch();
  const [success,setSuccess]=useState(false);

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
      dispatch(signupAction(state)).then(response=>{

        debugger

       if(response.payload.data.message=="User data saved")
       {
        setSuccess(true);
        setState({
          name:"",
        email:"",
        password:""
        })
       }


      })

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
       <h1>Signup Here</h1>
       {
        success?
       <Alert severity="success">Signup Success</Alert>:""

       }

       </div>
  

  
      <TextField name='name' onChange={handleChange} id="standard-basic" label="Name" variant="standard" />
      <br/>

      <TextField  name='email' onChange={handleChange}  label="Email" variant="standard" />
      <br/>

      <TextField name='password'  onChange={handleChange} label="Password" variant="standard" />
      <br/>

      <Button variant="contained"  onClick={handleClick}>Signup</Button>

    </Box>
    </div>
  )
}

export default Signup