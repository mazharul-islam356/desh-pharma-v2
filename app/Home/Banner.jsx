// Import React if you're using it directly in Next.js components
import Image from "next/image";

import { LuMessageSquare } from "react-icons/lu";
import banner from '../../public/assets/images/banner.png'

const Banner = () => {
    return (
        <div className="flex justify-start justify-items-center items-center h-screen">
            
            <div className="w-8/12">
            <h1 className="text-5xl w-8/12 mx-auto text-center font-semibold">
            Your Trusted <span className="text-[#00a89d]">Health</span> Partner
            </h1>
            <h5 className="w-7/12 mx-auto text-center text-lg">
            Providing reliable healthcare solutions, we are committed to your well-being. Count on us for quality medicines, expert advice, and exceptional service.
            </h5>

            <div className="flex justify-center items-center gap-8 mt-6 font-semibold mb-20">
                <button className="flex items-center gap-1 px-10 py-3 rounded-3xl text-white bg-[#00a89d] ">
                <LuMessageSquare />
                    Let's Talk</button>
                
            </div>
            </div>

            <div>
                <Image className="lg:mb-20" width={350} src={banner} alt="banner-img"></Image>
            </div>

           

        </div>
    );
};

export default Banner;
