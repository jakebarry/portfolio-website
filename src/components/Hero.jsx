import React from 'react';
import { useCallback } from 'react';
import Particles from '@tsparticles/react'; // Correct import from @tsparticles/react
import { loadFull } from 'tsparticles';    // Correctly importing tsparticles core library

function Hero({ scrollToPortfolio }) {
    const particlesInit = useCallback(async (engine) => {
        console.log("Particles initialised:", engine);
        await loadFull(engine); // Loads the full tsparticles package
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded:", container);
        // Optional callback when particles are loaded
    }, []);

    return (
        <div className="relative h-screen flex items-center justify-center bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300">
            {/* Particle background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0"
                options={{
                    background: {
                        color: {
                            value: 'transparent',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#ffffff',
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                area: 800,
                            },
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            /> */}
            {/* Hero content */}
            <div className="relative z-10 text-center">
                <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
                    Hi, I'm Jake – A Full Stack Developer
                </h1>
                <p className="text-lg sm:text-lg max-w-5xl mx-auto font-light">
                    I'm a Melbourne-based software developer with a background in mechatronics and a passion for solving real-world problems through technology. I hold a Master of Engineering in Mechatronics from the University of Melbourne, where I developed a wearable sensor system for AFL players. Currently, I work as a Software Developer at Data Annotation Tech, focusing on improving AI model performance. I have experience in front-end development, data management, and e-commerce platforms, with skills in Python, Java, JavaScript, Vue, React, and MongoDB. Connect with me!
                </p>
                <div className='flex gap-8 mb-6 justify-center mt-6'>
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
                <a
                    href="#portfolio"
                    className="inline-block mt-4 bg-indigo-500 text-white hover:bg-indigo-600 font-semibold py-2 px-6 rounded-full transition duration-300"
                    onClick={scrollToPortfolio}
                >
                    View My Work
                </a>
            </div>
        </div>
    );
};

export default Hero;
