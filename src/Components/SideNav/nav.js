import React from 'react';
import "./nav.css";
import icon from "../../Images/manager.png"
import logo from "../../Images/icon.jpg"
const nav = () => {
    return (
        <div className='nav_cont'>
            <h1 className='nav_head'>Name: Employee</h1>
            <p className='paragraph'>Username:-</p>
            <img alt="Wrong_url" className="img_sty" src={icon}/>
            <h2 className='nav_head'>Manager</h2>
            <div className='worker_cont'>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
                <div className='co_work'>
                <img src={logo} alt="Wrong_Url" className='icon_sty'/>
                <p className='paragraph co_para'>Co-Workers</p>
                </div>
            </div>
        </div>
    );
};

export default nav;