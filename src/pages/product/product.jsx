import React from 'react';
import { useState } from "react";
import './product.css';
import { DataGrid } from '@mui/x-data-grid';


export default function Product() {
    const productRows = [
        {
          id: 1,
          name: "Apple phone",
          img:
            "14.jpg",
          stock: 123,
          status: "Availble",
          price: "$1000",
        },
        {
          id: 2,
          name: "Apple phone",
          img:
            "14.jpg",
          stock: 123,
          status: "Availble",
          price: "$1000",
        },
        {
          id: 3,
          name: "Apple phone",
          img:
            "14.jpg",
          stock: 123,
          status: "Availble",
          price: "$1000",
        },
        {
          id: 4,
          name: "Apple phone",
          img:
            "14.jpg",
          stock: 123,
          status: "Availble",
          price: "$1000",
        },]
     
  const [data, setData] = useState(productRows);
  

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistitem">
            <img className="productlistimg" src={params.row.img}/>
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
   
  ];

  return (
    <div className="product">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
