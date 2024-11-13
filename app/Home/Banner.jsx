// Import React if you're using it directly in Next.js components
import { FaWhatsapp } from "react-icons/fa";

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
                <button className="px-10 py-3 rounded-3xl text-white bg-blue-600 ">Let's Talk</button>
                <button className="px-6 py-3 rounded-3xl text-white flex items-center gap-1 bg-[#25D366] ">
                    <FaWhatsapp className="text-xl" />
                    WhatsApp
                </button>
            </div>
        </div>
    );
};

export default Banner;
