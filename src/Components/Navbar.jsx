

import { Link, NavLink } from 'react-router';

import userIcon from '../assets/user.png'
import { use } from 'react';
import { Authcontex } from '../Provider/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {

  const {user,logOut} = use(Authcontex);
  console.log(user);

   const handleLogOut=()=> {
    logOut().then((result) => {
        console.log(result.user);
        toast.success('you are successfully log out')
      })
      .catch((error) => {
        console.log(error);
      })
  }
    return (
        <div className='flex justify-between'>
           <div>{user && user.email}</div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/career'}>Career</NavLink>
           </div>
           <div className='login-btn flex gap-2'>
            <img src={`${user? user.photoURL : userIcon}`} alt="" />
            {
              user ? (<button onClick={handleLogOut} to={'/auth/login'} className='btn btn-primary px-8'>logOut</button>) : (<Link to={'/auth/login'} className='btn btn-primary px-8'>Login</Link>)
            }
            
           </div>
        </div>
    );
};

export default Navbar;