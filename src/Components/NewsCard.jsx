import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { title, rating, total_view, author, thumbnail_url, details, id } = news;
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            {/* Author & date */}
            <div className="flex justify-between items-center p-4 border-b bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>
                <button className="btn btn-ghost btn-sm gap-2">
                    <CiBookmark className="text-gray-600" size={25}/>
                    <FaShareAlt className="text-gray-600" size={25}/>

                </button>
            </div>

            {/* Thumbnail */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-60 object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold text-gray-900">
                    {title}
                </h2>
                <p className="text-sm text-gray-600">
                    {details.slice(0, 150)}...
                    <Link to={`/newsdetails/${id}`} className="text-blue-500 cursor-pointer ml-1 hover:underline">
                        Read More
                    </Link>
                </p>

                {/* Rating and Views */}
                <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-orange-400" />
                        <span className="font-semibold">{rating.number}</span>
                        <span className="badge badge-secondary capitalize">
                            {rating.badge}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;