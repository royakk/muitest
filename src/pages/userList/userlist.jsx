import React from 'react';
import { useState } from "react";
import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Userlist = () => {
    const rows = [
        { id: 1, Username: 'Royakarimi', firstName: 'roya', age: 30 ,avatar:"79.jpg" ,status:"active",transaction :"$120"},
        { id: 2, Username: 'Royakarimi', firstName: 'roya', age: 30 ,avatar:"79.jpg" ,status:"active",transaction :"$120"},
        { id: 3, Username: 'Royakarimi', firstName: 'roya', age: 30 ,avatar:"79.jpg" ,status:"active",transaction :"$120"},
        { id: 4, Username: 'Royakarimi', firstName: 'roya', age: 30 ,avatar:"79.jpg" ,status:"active",transaction :"$120"},
       
      ];
    const [data, setData] = useState(rows);
    console.log("rowsss",data);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="userListUser">
                  <img className="userListImg" src={params.row.avatar}  />
                  {params.row.Username}
                </div>
              );
            },
          },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'age',headerName: 'Age',type: 'number',width: 90},
        { field: 'status', headerName: 'status', width: 130 },
        { field: 'transaction', headerName: 'transaction', width: 130 },
        { field: 'action', headerName: 'action', width: 130 , renderCell: (params) => {
            return (
             
                <button className='userListDelete'
                onClick={() => handleDelete(params.row.id)}
                >Delete</button>
            
            );
          },},
        
      ];
      
      
      
    return (
        <>
        <div className='userlist'>
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        
        checkboxSelection
      />
      <div className='create'>
      <Link to="/newUser">
        <Button variant="contained">create new user</Button>
     </Link>
        </div>
        </div>
        
        </>
    );
}

export default Userlist;
