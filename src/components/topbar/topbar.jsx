import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
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
              </div>
            </div>
        </div>
    </div>
  )
}
