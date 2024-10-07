import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';


function Portfolio() {
    return (
        <div className=''>
            <h2 className='text-xl text-center md:text-xl mb-4 font-bold'>Projects</h2>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;