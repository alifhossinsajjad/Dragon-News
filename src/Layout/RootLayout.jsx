import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const RootLayout = () => {

    const {state} = useNavigate();

    return (
        <div>
            <header>
            <Header/>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews/>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar/>
            </nav>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-5'>
               <aside className='col-span-3 sticky top-5 h-fit'>
                <LeftAside/>
               </aside>
                <section className="main col-span-6 ">
                   {state == 'loading' ? <Loading/> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <RightAside/>
                </aside>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;<div>
<Outlet>

</Outlet></div>