// Import React if you're using it directly in Next.js components
import Image from "next/image";
import { LuMessageSquare } from "react-icons/lu";
import banner from '../../public/assets/images/doctor.jpg'
import { Contact } from "lucide-react";


const Banner = () => {
    return (
        <div className="lg:flex justify-around lg:justify-items-center items-center h-screen">

            <div>
                <Image className="lg:mb-20 mt-10 ml-10 lg:w-auto w-[90%]" width={750} height={750} src={banner} alt="banner-img"></Image>
            </div>
            
            <div className="lg:w-6/12 mt-6">
            <h1 className="lg:text-6xl text-2xl text-blue-900 w-9/12 mx-auto text-start font-semibold">
            We take care of your health
            </h1>
            <h5 className="w-9/12 mx-auto text-lg mt-2">
            Providing reliable healthcare solutions, we are committed to your well-being. Count on us for quality medicines, expert advice, and exceptional service.
            </h5>

            <div className="w-9/12 mx-auto flex justify-start items-center gap-8 mt-6 font-semibold lg:mb-20">
                <button className="flex items-center gap-2 lg:px-10 px-6 lg:text-md text-sm py-2 lg:py-3 rounded-3xl text-white bg-blue-800 hover:bg-white hover:text-blue-800 transition ease-in-out hover:border-2 hover:border-blue-800 ">
                <LuMessageSquare className="text-xl font-semibold" />
                    Visit Us</button>

                <button className="flex items-center gap-2 lg:px-10 lg:py-3 py-2 lg:text-md text-sm px-4 rounded-3xl text-white bg-green-500 hover:bg-white hover:text-green-500 transition ease-in-out hover:border-2 hover:border-green-500 ">
                <Contact className="lg:text-xl font-semibold" />
                   Contact Us</button>
                
            </div>
            </div>


           

        </div>
    );
};

export default Banner;
