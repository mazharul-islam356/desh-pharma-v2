import Image from "next/image";
import { Fa500Px, FaDollarSign, FaWaveSquare } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import js from '../../public/assets/images/js.png'
import nodejs from '../../public/assets/images/nodejs.png'
import mongodb from '../../public/assets/images/mongodb.png'
import react from '../../public/assets/images/react native.png'
import sql from '../../public/assets/images/sql.png'
import php from '../../public/assets/images/php.png'
import laravel from '../../public/assets/images/laravel.png'
import python from '../../public/assets/images/python.png'


const TechStack = () => {
    return (
        <div className="w-11/12 mx-auto mt-20">
             <h1 className="text-4xl font-semibold text-center">Our Powerful Tech Stack</h1>

    <div className="relative h-[60rem] w-[60rem] mx-auto mt-20"> 

      {/* Background gradient circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200 opacity-70" />
      
      {/* Orbital path */}
      <div className="absolute inset-0 rounded-full border-4  animate-[spin_20s_linear_infinite]">
        {/* Orbiting icons */}
        <div className="absolute shadow-white -top-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
          <Image width={30} src={js} alt="js"/>
        </div>
        
        <div className="shadow-white absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
        <Image width={40} src={react} alt="js"/>
        </div>
        
        
        
        <div className="shadow-white absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <Image width={40} src={nodejs} alt="js"/>
        </div>
        
        <div className="shadow-white absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
          <div className="flex items-center justify-center font-bold text-gray-800">
          <Image width={40} src={mongodb} alt="js"/>
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute  inset-28 rounded-full bg-gradient-to-br from-blue-400 via-blue-200  to-blue-50 shadow-inner flex items-center justify-center">

      <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-reverse-spin">
        {/* Orbiting icons */}
        <div className="shadow-white absolute -top-4 left-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <Image width={40} src={sql} alt="js"/>
        </div>
        
        

        <div className="shadow-white absolute top-1/2 -right-4 translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        <Image width={45} src={python} alt="js"/>
        </div>
        
        <div className="shadow-white absolute -bottom-4 left-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <Image width={40} src={laravel} alt="js"/>
        </div>
        
        <div className="shadow-white absolute top-1/2 -left-4 translate-y-1/2 bg-white p-3 rounded-full shadow-md">
          <div className="flex items-center justify-center font-bold text-gray-800">
          <Image width={40} src={php} alt="js"/>
          </div>
        </div>
      </div>

        <div className="text-center">
          <h3 className="text-3xl -mt-32 font-semibold text-white">Squad Innovators</h3>
          
        </div>
      </div>

      <div className="bg-white w-[1000px] mx-auto right-4 -left-4 h-[70vh] absolute -bottom-2"></div>
    </div>


        </div>
    );
};

export default TechStack;