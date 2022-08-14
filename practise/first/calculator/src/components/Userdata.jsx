import { Grid, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React ,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../thunks';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Userdata = () => {

    const rows=useSelector(state=>state.counterSlice.users);
    const dispatch=useDispatch();

   

   useEffect(()=>{
        dispatch(fetchUser())
},[]) 
       

    

    const columns = [
        { field: 'getRowId()', headerName: 'ID', width: 270 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'email', headerName: 'email', width: 130 }
      ];
  return (
    
    <div>
<Grid item xs={6}>
        
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
    </div>
  )
}

export default Userdata