import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='border-2 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl'
    >
      <img
        src={imgUrl}
        alt={title}
        className='w-full h-40 md:h-52 object-cover'
      />
      <div className='p-5 dark:bg-gray-800 h-full'>
        <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>
          {title}
        </h3>
        <div className='flex flex-wrap gap-2'>
          {stack.map((item, index) => (
            <span
              key={index}
              className='px-3 py-1 text-sm font-semibold border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-600 dark:text-gray-300'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
