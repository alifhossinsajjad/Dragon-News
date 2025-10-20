import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='grid justify-center space-y-3'>
            <img src={logo} alt="" />
            <p className='text-accent text-center'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent text-center'>{format(new Date() ,"EEEE, MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;