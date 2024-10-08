import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <div className='w-full max-w-4xl'>
        <Title>Timeline</Title>
        <div className='mt-8'>
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
