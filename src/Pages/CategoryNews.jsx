
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data)
            return;
        } else if (id == '1') {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
        else {
            const filterNews = data.filter((news) => news.category_id == id)
            // console.log(filterNews);
            setCategoryNews(filterNews)
        }

    }, [id, data])



    return (
        <div>
            <h2 className='text-center font-bold'><span className='text-secondary'>{categoryNews.length}</span> - News category found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                 categoryNews.map(news => <NewsCard news={news} key={news.id}/>)   
                }
            </div>
        </div>
    );
};

export default CategoryNews;