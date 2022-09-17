import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
         
        },
        {
          name: 'Page B',
          uv: 3000,
         
        },
        {
          name: 'Page C',
          uv: 2000,
         
        },
        {
          name: 'Page D',
          uv: 2780,
         
        },
        {
          name: 'Page E',
          uv: 1890,
         
        },
        {
          name: 'Page F',
          uv: 2390,
         
        },
        {
          name: 'Page G',
          uv: 3490,
          
        },
      ];
    return (
        <div className='chart'>
            <h3 className="titlechart">sales analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
               <XAxis dataKey='name' stroke='#555'></XAxis> 
               <Line type="monotone" dataKey='uv' stroke='#555'></Line>
               <CartesianGrid stroke='#5550bd' strokeDasharray="5 5" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
