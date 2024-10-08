import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-12'>
      {/* Name */}
      <h1 className='text-5xl md:text-8xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
        Jake Barry
      </h1>

      {/* Social Links */}
      <div className='flex gap-8 mb-6'>
        <a 
          className='duration-200 transform hover:-translate-y-1 hover:shadow-lg text-gray-800 dark:text-gray-100 text-3xl' 
          href='https://github.com/jakebarry' 
          target='_blank' 
          rel='noopener noreferrer'
          aria-label="GitHub"
        >
          <i className='fa-brands fa-github'></i>
        </a>
        <a 
          className='duration-200 transform hover:-translate-y-1 hover:shadow-lg text-gray-800 dark:text-gray-100 text-3xl' 
          href='https://www.linkedin.com/in/jake-barry-2a9b33239/' 
          target='_blank' 
          rel='noopener noreferrer'
          aria-label="LinkedIn"
        >
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>

      {/* Title */}
      <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium'>
        Software Engineer & Web Developer
      </p>

      {/* Introduction */}
      <p className='text-sm md:text-lg max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed'>
        Hi, I’m Jake, a Melbourne-based software developer with a background in mechatronics and a passion for solving real-world problems through technology. I hold a Master of Engineering in Mechatronics from the University of Melbourne, where I developed a wearable sensor system for AFL players. Currently, I work as a Software Developer at Data Annotation Tech, focusing on improving AI model performance. I have experience in front-end development, data management, and e-commerce platforms, with skills in Python, Java, JavaScript, Vue, React, and MongoDB. Connect with me on <a href='https://www.linkedin.com/in/jake-barry-2a9b33239/' target='_blank' className='text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200'>LinkedIn</a> or explore my projects on <a href='https://github.com/jakebarry' target='_blank' className='text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200'>GitHub</a>.
      </p>
    </div>
  );
}

export default Intro;
