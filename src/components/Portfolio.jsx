import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-bold mb-8 text-center'>
        Projects
      </h2>
      <div className='flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolio.map(project => (
            <PortfolioItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
