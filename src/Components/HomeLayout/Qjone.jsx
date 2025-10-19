import React from 'react';
import swimming from '../../assets/swimming.png'
import babyClass from '../../assets/class.png'
import bg from '../../assets/bg.png'
import playGround from '../../assets/playground.png'


const Qjone = () => {
    return (
        <div>
            <div className='bg-base-200 p-3'>
                <h2 className='font-bold mb-5'>Qzone</h2>
                <div className='spay-5'>
                    <img src={swimming} alt="" />
                    <img src={babyClass} alt="" />
                    <img src={playGround} alt="" />
                </div>
            </div>
            <div className='mt-8'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Qjone;