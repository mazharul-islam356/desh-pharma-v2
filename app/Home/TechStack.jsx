import { Fa500Px, FaDollarSign, FaWaveSquare } from "react-icons/fa";
import { Navigation } from "swiper/modules";

const TechStack = () => {
    return (
        <div className="w-11/12 mx-auto mt-20">
             <h1 className="text-4xl font-semibold text-center">Our Powerful Tech Stack</h1>
             <div className="relative h-[500px] w-[500px] mx-auto mt-10">
      {/* Background gradient circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-100 opacity-50" />
      
      {/* Orbital path */}
      <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-[spin_20s_linear_infinite]">
        {/* Orbiting icons */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <Fa500Px className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaWaveSquare className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaDollarSign className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <div className="h-6 w-6 flex items-center justify-center font-bold text-gray-800">
            N
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute inset-12 rounded-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-50 shadow-inner flex items-center justify-center">

      <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-[spin_20s_linear_infinite]">
        {/* Orbiting icons */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <Fa500Px className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaWaveSquare className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <FaDollarSign className="h-6 w-6 text-gray-800" />
        </div>
        
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <div className="h-6 w-6 flex items-center justify-center font-bold text-gray-800">
            N
          </div>
        </div>
      </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">Orbital Icons</h3>
          <p className="text-sm text-gray-600">Rotating 360°</p>
        </div>
      </div>
    </div>


        </div>
    );
};

export default TechStack;