import React from 'react';
import "./sidbar.css";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from "react-router-dom";

const Sidbar = () => {
    return (
        <div className='sidbar'>
          <div className="sidbarwraper">
            <div className="sidbarmenu">
              <h4 className="sidbartitle">Dashboard</h4>
              <ul className="sidbarlist">
              <Link to="/"  className='link'>
                <li className="sidbaritem active" >
                 <HomeIcon/> 
                  Home</li>
                  </Link>
                <li className="sidbaritem">
                 <TimelineIcon/> 
                  Analytic</li>
                <li className="sidbaritem">
                 <TrendingUpIcon/> 
                  Salaes</li>
              </ul>
            </div>
            <div className="sidbarmenu">
              <h4 className="sidbartitle">Quick Menu</h4>
              <ul className="sidbarlist">
              <Link to="/users" className='link'>
                <li className="sidbaritem">
               
                 <PersonIcon/> 
                  User</li>
                  </Link>
                  <Link to="/product" className='link'>
                <li className="sidbaritem">
                 <ProductionQuantityLimitsIcon/> 
                  Product</li>
                  </Link>
                <li className="sidbaritem">
                 <PaidIcon/> 
                  Transaction</li>
                <li className="sidbaritem">
                 <ReportIcon/> 
                  Reports</li>
                  <div className="sidbarmenu">
              <h4 className="sidbartitle">Notification</h4>
              <ul className="sidbarlist">
                <li className="sidbaritem" >
                 <EmailIcon/> 
                  mail</li>
                <li className="sidbaritem">
                 <FeedbackIcon/> 
                  Feedback</li>
                <li className="sidbaritem">
                 <MessageIcon/> 
                  Message</li>
              </ul>
            </div>
              </ul>
            </div>
          </div>
          
        </div>
    );
}

export default Sidbar;
