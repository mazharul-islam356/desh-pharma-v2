// Import React if you're using it directly in Next.js components
import Image from "next/image";
import { LuMessageSquare } from "react-icons/lu";
import banner from '../../public/assets/images/doctor.jpg'
import { Contact, Phone } from "lucide-react";


const Banner = () => {
    return (
        <div className="lg:flex justify-around lg:justify-items-center items-center h-screen">

            <div>
                <Image className="lg:mb-20 mt-10 ml-10 lg:w-[40rem] w-[90%]" width={750} height={750} src={banner} alt="banner-img"></Image>
            </div>
            
            <div className="lg:w-6/12 mt-6">
            <h1 className="lg:text-6xl text-2xl text-blue-900 w-9/12 mx-auto text-start font-semibold">
            We take care of your health
            </h1>
            <h5 className="w-9/12 mx-auto text-lg mt-2">
            Providing reliable healthcare solutions, we are committed to your well-being. Count on us for quality medicines, expert advice, and exceptional service.
            </h5>

            <div className="w-9/12 mx-auto flex justify-start items-center gap-6 mt-6 font-semibold lg:mb-20">
                
                <a target="_blank" href="https://www.google.com/maps/place/Walton/@23.7177959,90.4080181,20z/data=!4m10!1m2!2m1!1sPC95%2B4C3+Walton,+North+south+bongshal!3m6!1s0x3755b8fe63868bdd:0x65d969e29377c2f8!8m2!3d23.717768!4d90.4085502!15sCiVQQzk1KzRDMyBXYWx0b24sIE5vcnRoIHNvdXRoIGJvbmdzaGFsWiYiJHBjOTUgNGMzIHdhbHRvbiBub3J0aCBzb3V0aCBib25nc2hhbJIBEWVsZWN0cm9uaWNzX3N0b3Jl4AEA!16s%2Fg%2F12hkwbwp8?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D">

                <button className="flex items-center gap-2 lg:px-10 px-4 lg:text-md text-xs py-2 lg:py-3 rounded-3xl text-white bg-blue-800 hover:bg-white hover:text-blue-800 transition ease-in-out hover:border-2 hover:border-blue-800 ">
                <LuMessageSquare className="text-xl font-semibold" />
                    Visit Us</button>
                
                </a>

                <a target="_blank" href={`tel:+880 1742-504941`}>
                <button className="flex items-center gap-2 lg:px-10 lg:py-3 py-2 lg:text-md text-xs px-3 rounded-3xl text-white bg-green-500 hover:bg-white hover:text-green-500 transition ease-in-out hover:border-2 hover:border-green-500 ">
                <Phone size={20} className="lg:text-xl font-semibold " />
                   Contact Us</button>
                </a>
                
            </div>
            </div>


           

        </div>
    );
};

export default Banner;
