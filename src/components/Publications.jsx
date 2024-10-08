import React from 'react';

function Publications() {
  return (
    <div className='py-10 px-5'>
      <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center'>
        Publications
      </h2>
      <div className='max-w-3xl mx-auto'>
        <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2'>
          Stemformatics data portal enables transcriptional benchmarking of lab-derived myeloid cells
        </h3>
        <h4 className='text-sm font-light text-gray-600 dark:text-gray-400 mb-4'>
          Choi, J., Butcher, S. K., Angel, P. W., Bransfield, J., Barry, J., Faux, N., Shaban, B., Pillai, P., Michalewicz, A. & Wells, C. A.
        </h4>
        <a 
          className='text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200' 
          href='https://doi.org/10.1016/j.stemcr.2024.04.012' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          10.1016/j.stemcr.2024.04.012
        </a>
      </div>
    </div>
  );
}

export default Publications;
