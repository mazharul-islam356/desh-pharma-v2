// Import React if you're using it directly in Next.js components
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";


const Banner = () => {
    return (
        <div className="flex flex-col gap-y-2 justify-center items-center h-screen ">
            <h1 className="text-5xl w-7/12 mx-auto text-center font-semibold">
                Your dedicated <span className="text-blue-700">Software and App</span> development partner
            </h1>
            <h5 className="w-6/12 mx-auto text-center text-lg ">
                More than developers, we're your dedicated team. We take complete ownership of your project, building software & apps that exceed expectations.
            </h5>

            <div className="flex justify-center items-center gap-8 mt-6 font-semibold mb-20">
                <button className="flex items-center gap-1 px-10 py-3 rounded-3xl text-white bg-blue-600 ">
                <LuMessageSquare />
                    Let's Talk</button>
                <button className="px-6 py-3 rounded-3xl text-white flex items-center gap-1 bg-[#25D366] ">
                    <FaWhatsapp className="text-xl" />
                    WhatsApp
                </button>
            </div>

            {/* -----------galary section----------- */}

            <div className="grid grid-cols-3 w-11/12 mx-auto absolute mt-72">

                <div className="flex">

                <div className="flex justify-end items-end gap-4">
               <div>
               <div className="flex items-end">
               <div className="bg-red-500 w-44 h-80 rounded-tr-[40%] bg-[url('https://i.ibb.co.com/m8Mc86D/banner-img09.jpg')] bg-cover bg-center">
               </div>
               
               <div className="bg-[#25d366] w-32 ml-4 h-44 rounded-bl-[40%] mt-4 flex justify-center">

               <h3 className="flex flex-col justify-center font-semibold text-center text-md  text-white"> <span className="text-4xl font-bold">30+</span> Tech Stack</h3>


               </div>
               </div>
               <div className="bg-red-500 w-80 h-40 rounded-tr-[40%] mt-4 bg-[url('https://i.ibb.co.com/Bf46cbB/banner-img08.jpg')] bg-cover bg-center">
               </div>
               </div>

               <div>
               <div className="bg-blue-500 w-44 h-36 mb-4 rounded-tl-[50%] rounded-br-[50%] bg-[url('https://i.ibb.co.com/f9vSY9b/banner-img02.jpg')] bg-cover bg-center">
               </div>
               <div className="bg-[#25d366] w-52 h-40 rounded-tr-[50%] flex justify-center">

               <h3 className="flex flex-col justify-center font-semibold text-center text-lg  text-white"> <span className="text-5xl font-bold">4+</span> Experience</h3>


               </div>
               </div>
               <div className="bg-blue-500 w-44 h-64 rounded-tr-[50%] bg-[url('https://i.ibb.co.com/rQP1M4N/banner-img03.jpg')] bg-cover bg-center">
               </div>

               <div>
               <div className="bg-green-500 w-40 h-28 rounded-tr-[50%] rounded-bl-[40%] bg-[url('https://i.ibb.co.com/LgTxgpL/banner-image01.jpg')] bg-cover bg-right-top">
               </div>
               <div className="bg-blue-500 mt-4 w-40 h-36 rounded-tl-[50%] flex justify-center">

               <h3 className="flex flex-col justify-center font-semibold text-center text-md  text-white"> <span className="text-4xl font-bold">20+</span>Projects</h3>


               </div>
               </div>

               <div>
              <div className="flex gap-4">
              <div className="bg-blue-500 mt-4 w-32 h-40 rounded-br-[50%] flex justify-center">

               <h3 className="flex flex-col justify-center font-semibold text-center text-md  text-white"> <span className="text-4xl font-bold">10+</span> Company</h3>

               </div>
               <div className="bg-gray-500 mt-4 w-36 h-40 rounded-bl-[50%] rounded-tr-[50%]  bg-[url('https://i.ibb.co.com/fkqRFXm/banner-img04.jpg')] bg-cover bg-left">
               </div>
              </div>
               <div className="bg-gray-500 mt-4 w-72 h-36 rounded-tl-[50%] bg-[url('https://i.ibb.co.com/gtpqNt8/img-12.jpg')] bg-cover bg-bottom">
               </div>
               </div>

               {/* last */}
               <div>
               <div className="bg-red-500 mt-4 w-44 h-80 rounded-tl-[40%] bg-[url('https://i.ibb.co.com/zFTq6QD/banner-img06.jpg')] bg-cover bg-center">
               </div>
               <div className="bg-red-500 mt-4 w-44 h-36 rounded-tr-[50%] bg-[url('https://i.ibb.co.com/TTzyyjY/image-10.jpg')] bg-cover bg-center">
               </div>
               </div>


                </div>

             
                </div>

                
            </div>

        </div>
    );
};

export default Banner;
