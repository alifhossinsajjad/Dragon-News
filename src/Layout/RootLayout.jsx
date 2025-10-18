import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
            <Header/>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet>

                    </Outlet>
                </section>
                <section className="right_nav"></section>
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