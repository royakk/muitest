import React from 'react';
import './featured.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Featured = () => {
    return (
        <div className='Featured'>
            <div className="Featureditem">
              <span className='Featuredtitle'>sales</span> 
            <div className="FeaturedmoneyContainer">
                <span className="Featuredmoney">$4.45</span>
                <span className="Featuredrate">-1.4%
                <ArrowDownwardIcon/></span>
                
                </div>
                <span className="Featuredsub">compare to last month</span> 
            </div>
            <div className="Featureditem">
              <span className='Featuredtitle'>cost</span> 
            <div className="FeaturedmoneyContainer">
                <span className="Featuredmoney">$2.45</span>
                <span className="Featuredrate">-1.2%
                <ArrowDownwardIcon/></span>
                
                </div>
                <span className="Featuredsub">compare to last month</span> 
            </div>
            <div className="Featureditem">
              <span className='Featuredtitle'>Revanue</span> 
            <div className="FeaturedmoneyContainer">
                <span className="Featuredmoney">$2.45</span>
                <span className="Featuredrate">-11.2%
                <ArrowDownwardIcon/></span>
                
                </div>
                <span className="Featuredsub">compare to last month</span> 
            </div>
            
        </div>
    );
}

export default Featured;
