import React from 'react';

function Title({ children, id }) {
  return (
    <h1
      id={id ? id : undefined}
      className='text-3xl font-extrabold text-center mb-8 text-stone-900 dark:text-white underline underline-offset-8 decoration-4'
    >
      {children}
    </h1>
  );
}

export default Title;
