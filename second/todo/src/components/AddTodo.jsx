import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { addTodo,deleteTodo,editTodo } from '../slice/todo';
import uuid from 'react-uuid'
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


import { useDispatch,useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Addtodo = () => {

  const [state,setState]=useState({
    id:"",
    task:""
  });


  const rows=useSelector(state=>state.todoSlice.todos);
  const [open, setOpen] = useState(false);
  const [editData,setEditData]=useState({
    id:"",
    task:""

  })
  const handleOpen = (row) => {

    setEditData(row);

    setOpen(true);
  }
  const handleClose = () => setOpen(false);


  
  const dispatch=useDispatch();

  const handleClick=()=>{
    // Action would be dispatched

    dispatch(addTodo(state));


  }

  const handleChange=(event)=>{
    // Action would be dispatched

   setState({...state,[event.target.name]:event.target.value,id:uuid()});


  }

  const handleEditClick=()=>{

    dispatch(editTodo(editData));
    setOpen(false);

  }


  const clickDelete=(id)=>{
 dispatch(deleteTodo(id));

  }
  const handleEditChange=(event)=>{
    setEditData({...editData,task:event.target.value});

  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 270 },
        { field: 'task', headerName: 'Task', width: 130 },
    
   
        {field:'name' ,headerName:'Delete', renderCell:(params)=>{
     
          return <Button variant="contained" onClick={()=>clickDelete(params.row.id)}>
         Delete
          </Button>
  
        },width: 130},

        {field:'edit' ,headerName:'Edit', renderCell:(params)=>{
     
          return <Button variant="contained" onClick={()=>handleOpen(params.row)}>
           Edit
          </Button>
  
        },width: 130}
      ];


 



  return (
    <div style={{marginTop:"100px"}}>




<Box>

<Grid container spacing={2}>
<Grid item xs={2}>
</Grid>
        <Grid item xs={8}>
            <h1>Add Todos</h1>
          <Item>

          <TextField name="task" id="outlined-basic" label="Todo" variant="outlined" onChange={handleChange}/> <br/>

          <Button  style={{marginTop:"20px"}} variant="contained" onClick={handleClick}>Add Item</Button>


          </Item>
        </Grid>

        <Grid item xs={3}>
</Grid>
 
      </Grid>


     
    </Box>

    <Box>

<Grid container spacing={2}>
<Grid item xs={2}>
</Grid>
        <Grid item xs={8}>
        
          <Item>

          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

        


          </Item>
        </Grid>

        <Grid item xs={3}>
</Grid>
 
      </Grid>


     
    </Box>


{/**Modal for Edit Purpose */}

<div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField name="task" onChange={handleEditChange} value={editData.task} id="outlined-basic" label="Todo" variant="outlined" /> <br/>

<Button  style={{marginTop:"20px"}} variant="contained" onClick={handleEditClick}>Edit Item</Button>
      
        </Box>
      </Modal>
    </div>



    </div>
  )
}

export default Addtodo