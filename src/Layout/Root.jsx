// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Home/Navber';

const Root = () => {
    return (
        <div>
            {/* Header section  */}  
            <Navber></Navber>
            <Outlet></Outlet>
            {/* Footer section */}
        </div>
    );
};

export default Root;