import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-primary text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-base'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>
              Hello, I'm Sangam, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              As a dedicated and passionate front-end developer, I specialize in
              creating exceptional user experiences by crafting visually
              appealing, responsive, and highly interactive web applications.
              With a strong foundation in HTML, CSS, and JavaScript, I
              consistently strive to stay at the forefront of modern web
              technologies, ensuring that the websites I develop are not only
              aesthetically pleasing but also perform seamlessly across various
              devices and platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
