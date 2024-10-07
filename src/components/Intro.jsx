import React from 'react'

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Jake Barry</h1>
            <div className='cursor-pointer text-2xl flex gap-8 mb-2 '>
                <a className='duration-200 hover:mb-[5px] hover:mt-[-5px] hover:shadow-lg ' href='https://github.com/jakebarry' target="_blank">
                    <i className="fa-brands fa-github "></i>
                </a>
                <a className='duration-200 hover:mb-[5px] hover:mt-[-5px] hover:shadow-lg ' href='https://linkedin.com/in/jake-barry-2a9b33239' target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <p className='text-base md:text-xl mb-1 font-medium'>Software Engineer & Web Developer</p>
            <p className='text-sm max-w mb-6 font-medium'>
                Hi, I’m Jake, a Melbourne-based software developer with a background in mechatronics and a passion for solving real-world problems through technology. I hold a Master of Engineering in Mechatronics from the University of Melbourne, where I developed a wearable sensor system for AFL players. Currently, I work as a Software Developer at Data Annotation Tech, focusing on improving AI model performance. I have experience in front-end development, data management, and e-commerce platforms, with skills in Python, Java, JavaScript, Vue, React, and MongoDB. Connect with me on <a href='www.linkedin.com/in/jake-barry-2a9b33239' className='underline text-blue-500'>LinkedIn</a> or explore my projects on <a href='https://github.com/jakebarry' className='underline text-blue-500'>GitHub</a></p>
        </div>
    )
}

export default Intro;