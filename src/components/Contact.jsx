import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className='flex flex-col items-center py-12'>
      <div className='w-full max-w-3xl'>
        <form
          action='https://getform.io/f/blljxyeb'
          method='POST'
          className='flex flex-col w-full px-4 md:px-0'
        >
          <Title>Contact</Title>

          <input
            type='text'
            name='name'
            placeholder='Your Name'
            className='p-3 mb-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300'
          />

          <input
            type='email'
            name='email'
            placeholder='Your Email'
            className='p-3 mb-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300'
          />

          <textarea
            name='message'
            placeholder='Your Message'
            rows='6'
            className='p-3 mb-6 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300'
          />

          <button
            type='submit'
            className='self-center px-8 py-3 text-base font-semibold rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg'
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
