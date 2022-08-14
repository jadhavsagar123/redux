import { Grid, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React ,{useEffect,useState} from 'react'
import { styled } from '@mui/material/styles';
import { useSelector,useDispatch } from 'react-redux';
import { fetchBooks } from '../thunks';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Books = () => {

    const rows=useSelector(state=>state.todoSlice.books);
    const dispatch=useDispatch();

    const [search , setSearch] =useState('')
    const handleSearch =(e)=>{
        setSearch(e.target.value)
      }

   
      const inSearch=()=>{  
        dispatch(fetchBooks(search));  //you can pass any input value to it --??
    }
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 270 },
        { field: 'etag', headerName: 'Etag', width: 130 },

        { field: 'image', headerName: 'Image', width: 130, height:530,

        renderCell:(params)=>{
        

            return <img width={"230"} height={230} src={params?.row?.volumeInfo?.imageLinks?.smallThumbnail}/>

        }
    
    
    
    },
    
   
      
      ];
  return (
    
    <div>
<input type="text" onChange={handleSearch}/> <br />
<button onClick={inSearch}> Search books</button>
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

export default Books