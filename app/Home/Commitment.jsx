import Image from "next/image";
import commitment from '../../public/assets/images/6925414.jpg'
import { IoMdArrowDropright } from "react-icons/io";

const Commitment = () => {
    return (
        <div className="w-10/12 mx-auto  flex flex-col justify-between mt-20">
              <h1 className="text-4xl font-semibold text-center">Our Commitment to Quality</h1>

             <div className="flex mb-6  h-[85vh] justify-around gap-5 items-center">
             <div>
                <Image className="shadow-sm border mt-5 rounded-xl" alt="commitment" width={400} height={400} src={commitment}></Image>
              </div>

              <div>
              
              <h1 className="font-semibold text-2xl">
              Ensuring Your Health and Safety
              </h1>

              <p className="w-[39rem] text-justify mt-5 text-md">
              At Desh Pharam, we are committed to providing the highest quality pharmaceutical services. Our team of experienced pharmacists meticulously checks every prescription to ensure accuracy and safety.
              </p>
              <p className="w-[39rem] text-justify mt-4 text-md">We source our medications from reputable suppliers and maintain strict quality control measures. Your health is our top priority, and we go above and beyond to meet and exceed industry standards.</p>

              <button className="bg-[#00a89d] mt-6 text-white rounded-md py-2 px-6 justify-center flex items-center text-center">Learn More About Our Proccess

                <IoMdArrowDropright className="text-xl"></IoMdArrowDropright>
              </button>

              
              </div>
             </div>


        </div>
    );
};

export default Commitment;