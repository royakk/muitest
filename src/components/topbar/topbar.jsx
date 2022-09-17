import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Language  from '@mui/icons-material/Language';
import Settings  from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarwraper'>
            <div className='topright'>
              <span className='logo'>pilmo</span>
            </div>
            <div className='topleft'>
              <div className="icon">
                <NotificationsIcon/>
                <span className='topbarbadge'>2</span>
              </div>
              <div className="icon">
                <Language/>
              </div>
              <div className="icon">
                <Settings/>
                
              </div>
              <div className="icon">
              <img src='79.jpg' className='topavatar'></img>                
              </div>
            </div>
        </div>
    </div>
  )
}
