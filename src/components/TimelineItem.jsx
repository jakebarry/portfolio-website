import React from 'react';

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='relative border-l border-stone-200 dark:border-stone-700'>
      <li className='mb-10 ml-6'>
        <div className='absolute w-3 h-3 bg-stone-200 dark:bg-stone-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900' />
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
          <span className='inline-block px-3 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            {year}
          </span>
          <h3 className='text-xl font-semibold text-stone-900 dark:text-gray-100'>
            {title}
          </h3>
          <div className='text-sm text-stone-500 dark:text-stone-400'>
            {duration}
          </div>
        </div>
        <p className='mt-2 text-base text-stone-600 dark:text-stone-400'>
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
