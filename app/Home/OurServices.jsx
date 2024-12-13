import appDevelopment from '../../public/assets/images/mobile-development.png'
import softwareDevelopment from '../../public/assets/images/experiments.png'
import uiUXDesign from '../../public/assets/images/web-design.png'
import webDevelopment from '../../public/assets/images/coding.png'
import eCommerce from '../../public/assets/images/online-store.png'
import saas from '../../public/assets/images/saas.png'
import Image from "next/image";
import { GiMedicines } from "react-icons/gi";


const OurServices = () => {
    return (
        <div>
             <div className="h-auto mt-20 mx-auto w-10/12">
      <h1 className="text-4xl font-semibold text-center">Our Services</h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-5 gap-y-6 mt-10 '>

       

       

    {/* card 01 */}
      <div className='lg:w-80 h-60 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <div className='flex gap-3 items-center justify-center justify-items-center'>
        <GiMedicines  className='text-3xl'></GiMedicines>
        <h1 className='text-xl font-semibold mt-3 text-center'>Prescription Filling</h1>
        </div>
       <p>Quick and accurate prescription filling by our expert pharmacists.</p>
      </div>

    {/* card 02 */}
    <div className='lg:w-96 h-72 border px-8 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <Image alt="software_development" src={softwareDevelopment} width={60}></Image>
       <h1 className='text-2xl font-semibold mt-3'>Software Development</h1>
       <p>Custom-built software solutions that streamline your operations, solve unique challenges, and fuel your growth.</p>
      </div>

    {/* card 03 */}
    <div className='lg:w-96 h-72 border px-8 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <Image alt="UI/UX_design" src={uiUXDesign} width={60}></Image>
       <h1 className='text-2xl font-semibold mt-3'>UI/UX Design</h1>
       <p>We create digital experiences that users love. Intuitive, engaging designs that turn first-time visitors into loyal customers.</p>
      </div>

    {/* card 04 */}

    <div className='lg:w-96 h-72 border px-8 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <Image alt="web_development" src={webDevelopment} width={60}></Image>
       <h1 className='text-2xl font-semibold mt-3'>Web Development</h1>
       <p>Cutting-edge web development delivering fast, secure, and user-friendly websites that boost business growth and provide exceptional online experiences.
       </p>
      </div>
   

      {/* card 05 */}

      <div className='lg:w-96 h-72 border px-8 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <Image alt="app_development" src={eCommerce} width={60}></Image>
       <h1 className='text-2xl font-semibold mt-3'>eCommerce</h1>
       <p>Turn your online store into a sales powerhouse. We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.</p>
      </div>

      {/* card 06 */}
      <div className='lg:w-96 h-72 border px-8 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-blue-400 flex flex-col justify-center justify-items-center'>
        <Image alt="saas_development" src={saas} width={70}></Image>
       <h1 className='text-2xl font-semibold mt-3'>SaaS Development</h1>
       <p>Scalable SaaS solutions that streamline your business, expand your reach, and boost customer satisfaction.</p>
      </div>


      </div>


     
    </div>
        </div>
    );
};

export default OurServices;