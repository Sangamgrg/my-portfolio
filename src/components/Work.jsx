import React from 'react';
import AgencyImg from '../assets/projects/AgencyImg.jpeg';
import EcommerceImg from '../assets/projects/EcommerceImg.jpeg';
import NoteImg from '../assets/projects/NoteImg.jpeg';
import BookImg from '../assets/projects/MERN_BookImg.jpeg';
import DoctorImg from '../assets/projects/doctor-appoinment.jpeg';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-primary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-base">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid items */}

          {/* Doctor appoinment page */}
          <div
            style={{ backgroundImage: `url(${DoctorImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl text-center font-bold text-white">
                MERN Doctor appoinment
              </span>
              <div className="flex justify-center items-center">
                <a href="https://mern-doctor-booking.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sangamgrg/mern-doctor-booking" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* book inventory work */}
          <div
            style={{ backgroundImage: `url(${BookImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white">
                MERN Book Inventory
              </span>
              <div className="flex justify-center items-center">
                <a href="https://mern-book-front-aqjc.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sangamgrg/mern-book-project.git" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Agency landing page */}
          <div
            style={{ backgroundImage: `url(${AgencyImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white">
                Agency Landing Page
              </span>
              <div className="flex justify-center items-center">
                <a href="https://react-js-website.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sangamgrg/react-js-website.git" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ecommerce page */}
          <div
            style={{ backgroundImage: `url(${EcommerceImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl text-center font-bold text-white">
                Ecommerce Landing Page
              </span>
              <div className="flex justify-center items-center">
                <a href="https://sangamgrg.github.io/Ecommerce-website/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sangamgrg/Ecommerce-website.git" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* React note app */}
          <div
            style={{ backgroundImage: `url(${NoteImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white">
                React Note App
              </span>
              <div className="flex justify-center items-center">
                <a href="https://react-movie-app-blush.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sangamgrg/react-note-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
