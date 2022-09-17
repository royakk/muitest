import React from 'react';
import Chart from '../components/chart/chart';
import Featured from '../components/featured/featured';
import Widgetlg from '../components/widget/widgetlg';
import Widgetsmal from '../components/widget/widgetsmal';
import './homepage.css';


const Homepage = () => {
    return (
        <div className='home'>
           <Featured/> 
           <Chart/>
           <div className="homewidget">
            <Widgetsmal/>
            <Widgetlg/>
           </div>
        </div>
    );
}

export default Homepage;
