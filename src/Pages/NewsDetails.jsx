import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsCard from '../Components/NewsCard';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const [news, setNews] = useState({})

    

    useEffect(() => {
        const newsDetails = data.find(n => n.id === id);
        setNews(newsDetails);
    },[id,data])

    // console.log(id,data, news);
    return (
        <div>
            <header className='py-3'>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-6  my-5'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailsCard news = {news}/>
            </section>
            <aside className='col-span-3'>
                <RightAside/>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;