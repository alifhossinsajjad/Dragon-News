import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoriesPromise = fetch('/Data/categories.json')
.then((res) => res.json());
const Categories = () => {

    // console.log(categoriesPromise);


    const categoris = use(categoriesPromise);

    return (
        <div>
            <h2 className='font-bold'>All Categories ({categoris.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categoris.map(category => (
                        <NavLink 
                        to={`/category/${category.id}`}
                        className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}
                        key={category.id}>
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;