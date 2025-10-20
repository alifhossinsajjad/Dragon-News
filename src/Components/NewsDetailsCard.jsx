import React from 'react';
import NewsCard from './NewsCard';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
     const {
    title,
    
    image_url,
    details,
    category_id,
  } = news;

    console.log(news);
    
    return (
        <div className='space-y-5 shadow-2xl p-5 rounded'>
            <img className='w-full h-82 object-cover' src={image_url} alt="" />
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`}>
                <button className='btn btn-sm  bg-secondary text-white'><FaArrowAltCircleLeft/>All news in this category</button>
            </Link>
        </div>
    );
};

export default NewsDetailsCard;