'use client'
import Image from "next/image";
import { FaDAndD } from "react-icons/fa";
import projectImage from '../../public/assets/images/image01.jpg'
const OurProjects = () => {
    return (
        <div>
            <div className="mt-20 w-11/12 mx-auto">
            <h1 className="font-semibold text-4xl text-center">Our Recent Projects</h1>


            {/* -----project 01------ */}
            <div className="w-10/12 mx-auto h-96 border rounded-xl border-gray-400 flex justify-between items-center mt-10 hover:scale-105 duration-500 transition-transform  cursor-pointer">

                <div className="bg-gray-300 flex justify-center items-center h-full w-[45%] rounded-xl ">
                    {/* <Image href='https://i.ibb.co.com/r7ZYN9P/Rifat.jpg' alt="project01" /> */}
                    <Image priority className="px-10 rounded-lg" src={projectImage} alt="project01" />

                    
                </div>

                <div className="w-[50%]">
                <div className="flex items-center gap-1 mb-2">
                <FaDAndD className="text-3xl"></FaDAndD>
                <h4 className="text-3xl">Project 01</h4>
                </div>
                  <p className="w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum atque assumenda. Excepturi hic dolorum sequi quidem nihil laborum! Officiis.</p>
                </div>

            </div>

            {/* -----project 02------ */}
            <div className="w-10/12 mx-auto h-96 border rounded-xl border-gray-400 flex justify-between items-center mt-10 hover:scale-105 duration-500 transition-transform  cursor-pointer">

                <div className="bg-gray-300 flex justify-center items-center h-full w-[45%] rounded-xl">

                <Image priority className="px-10 rounded-lg" src={projectImage} alt="project01" />

                   
                </div>

                <div className="w-[50%]">
                <div className="flex items-center gap-1 mb-2">
                <FaDAndD className="text-3xl"></FaDAndD>
                <h4 className="text-3xl">Project 02</h4>
                </div>
                  <p className="w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum atque assumenda. Excepturi hic dolorum sequi quidem nihil laborum! Officiis.</p>
                </div>

            </div>

        </div>
        </div>
    );
};

export default OurProjects;