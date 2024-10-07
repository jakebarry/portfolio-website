function currentDate() {
    var now = new Date();
    var bDay = new Date(2024, 6, 1);
    var elapsedT = now - bDay;
    return Math.ceil(elapsedT*3.8026E-10)
}

export default [
    {
        year: 'Today',
        title: 'Software Developer / AI Trainer',
        duration: currentDate() + ' months',
        details: 'As a Software Developer at DataAnnotation, I am focused on enhancing end-user interactions by evaluating and improving AI-generated code. I also analyse and rate AI model responses using a systematic review framework. Working remotely, I contribute to the development of innovative solutions for the company.',
    },
    {
        year: '2024',
        title: 'Website Editor / Inventory Manager',
        duration: '6 months',
        details: 'In my role as Website Editor / Inventory Manager at A2Z Promotions in Melbourne, I successfully managed the upload of new products across wholesale and Shopify platforms using the Cin7 inventory software. I also worked towards updating the UI and formatting of the commercial website to improve user engagement and drive sales.',
    },
    {
        year: '2022',
        title: 'Software Engineer Research Internship',
        duration: '3 months',
        details: 'During my internship at Stemformatics, I actively contributed to the front-end webpage redesign, improving user navigation and experience. I also implemented new data comparison functionality, enhancing data analysis capabilities. Additionally, I received an authorship commendation for a Stemformatics manuscript, highlighting my contributions to the organisation.',
    },
    {
        year: '2020-2022',
        title: 'Master of Engineering (Mechatronics)',
        duration: '3 years',
        details: 'During my Master’s degree, I focused on advanced mechatronic systems, robotics, and embedded technologies. My capstone project, in collaboration with the Collingwood Football Club, involved designing and developing an integrated sEMG sensor system to detect muscle fatigue, showcasing my skills in sensor integration, data analysis, and Bluetooth communication. Throughout the course, I deepened my expertise in software development, particularly in Python, while gaining hands-on experience with hardware-software integration.',
    },
    {
        year: '2016-2018',
        title: 'Bachelor of Science (Mechatronics)	',
        duration: '3 years',
        details: 'In my Bachelor’s studies, I explored the core principles of mechatronics, including robotics, control systems, and mechanical design. My final project involved constructing a prosthetic robotic hand, where I applied theoretical knowledge to create a functional prototype. This program laid a strong foundation in programming, electronics, and system modelling, while also introducing me to project-based teamwork and interdisciplinary collaboration.',
    },
]