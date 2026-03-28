import React from 'react';

const About = () => {
 return (
  <div className='bg-secondary' >
   <div className="content p-10">
    <h1
     className=' text-[20px] text-center lg:text-[50px] font-outfit font-extrabold capitalize text-white overflow-hidden  select-none '
    >Engineer's note </h1>
   </div>
   <div className='AboutMe' >
    <h1>
     Hello, I’m Ratib. I am currently pursuing a degree in Computer Science and Engineering at American International University-Bangladesh. I am a passionate web developer who started my journey with the fundamentals of web development, including HTML, CSS, and JavaScript. As I progressed, I expanded my skill set to modern technologies such as Tailwind CSS, React.js, and Next.js for building dynamic and responsive user interfaces. On the backend, I work with Node.js and Express.js, and I use MongoDB as a NoSQL database. I have developed several projects implementing key features such as authentication systems (including JWT-based authentication), CRUD operations, REST APIs, admin role management, and fully responsive designs. I enjoy solving problems, building scalable applications, and continuously learning new technologies to improve my development skills.
    </h1>
   </div>
  </div>
 );
};

export default About;