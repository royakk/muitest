import React from 'react';
import './widget.css';
const Widgetsmal = () => {
    return (
        <div className='widgetsm'>
            <span className='widgetsmtitle'>New Join Member</span>
            <ul className="widgetsmlist">
                <li className="widgetsmlistitem">
                    <img src='79.jpg' className='widgetimg'></img>
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Roya karimi</span>
                        <span className="widgetsmusertitle">web developer</span>
                    </div>
                </li>
                <li className="widgetsmlistitem">
                    <img src='79.jpg' className='widgetimg'></img>
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Roya karimi</span>
                        <span className="widgetsmusertitle">web developer</span>
                    </div>
                </li>
                <li className="widgetsmlistitem">
                    <img src='79.jpg' className='widgetimg'></img>
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Roya karimi</span>
                        <span className="widgetsmusertitle">web developer</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Widgetsmal;
