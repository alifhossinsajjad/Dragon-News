import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qjone from './Qjone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin/>
            <FindUs/>
            <Qjone/>
        </div>
    );
};

export default RightAside;