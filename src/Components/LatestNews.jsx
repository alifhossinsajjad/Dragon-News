import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p className='font-bold text-accent'>Local businesses in Bangladesh are facing increasing pressure due to the rising costs of raw materials in both domestic and international markets. Many enterprises are actively seeking strategies to adapt to these challenging economic conditions, including exploring alternative sourcing options, implementing cost-cutting measures, and adjusting pricing strategies. The impact of these rising costs is being felt across various industries, from manufacturing to consumer goods. Business analysts are closely monitoring how these challenges will affect the overall competitiveness and sustainability of local enterprises in the long run. Support measures from the government and industry associations may be crucial in helping businesses navigate these economic headwinds.",</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;