
import { GiMedicines } from "react-icons/gi";
import { ClipboardList, Clock, ShieldPlus, Stethoscope } from 'lucide-react'
import { FaShuttleVan } from 'react-icons/fa'


const OurServices = () => {
    return (
        <div>
             <div className="h-auto mt-20 mx-auto w-10/12">
      <h1 className="text-4xl font-semibold text-center">Our Services</h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-5 gap-y-6 mt-10 '>

       

       

    {/* card 01 */}
      <div className='lg:w-[25rem] h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <GiMedicines  className='text-3xl'></GiMedicines>
        <h1 className='text-2xl font-semibold  text-start'>Prescription Filling</h1>
        </div>
       <p className='text-justify'>Quick and accurate prescription filling by our expert pharmacists. We ensure you get the right medication with proper instructions. Your health is our top priority.</p>
      </div>

    {/* card 02 */}
      <div className='lg:w-[25rem] h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <Stethoscope   className='text-3xl'></Stethoscope>
        <h1 className='text-2xl font-semibold  text-start'>Health Consultations</h1>
        </div>
       <p className='text-justify'>Free health consultations with our knowledgeable staff. Get expert advice on managing your health conditions. We&apos;re here to support your wellness journey.</p>
      </div>

      {/* card 03 */}
      <div className='lg:w-[25rem] h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <Clock className='text-3xl'></Clock>
        <h1 className='text-2xl font-semibold  text-start'>24/7 Service</h1>
        </div>
       <p className='text-justify'>We&apos;re open 24/7 to serve you in times of need. Our round-the-clock service ensures you always have access to essential medications. Your health doesn&apos;t wait, neither do we.</p>
      </div>

      {/* card 04 */}
      <div className='lg:w-[25rem]h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <FaShuttleVan className='text-3xl'></FaShuttleVan>
        <h1 className='text-2xl font-semibold  text-start'>Home Delivery</h1>
        </div>
       <p className='text-justify'>Convenient home delivery for your medications and health products. We bring your prescriptions right to your doorstep. Stay safe and healthy without leaving your home.</p>
      </div>

      {/* card 05 */}
      <div className='lg:w-[25rem] h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <ShieldPlus    className='text-3xl'></ShieldPlus>
        <h1 className='text-2xl font-semibold  text-start'>Medical Equipment Rental</h1>
        </div>
       <p className='text-justify'>Rent medical equipment for home care needs. We offer a wide range of equipment to support your recovery. Our team ensures you get the right equipment for your specific needs.</p>
      </div>

      {/* card 06 */}
      <div className='lg:w-[25rem] h-64 border px-6 py-10 rounded-2xl hover:shadow-md transition  ease-linear drop-shadow-md hover:shadow-[#00a99d] flex flex-col justify-center justify-items-start'>
        <div className='flex gap-2 items-center justify-start justify-items-start mb-2'>
        <ClipboardList className='text-3xl'></ClipboardList>
        <h1 className='text-2xl font-semibold  text-start'>Medication Management</h1>
        </div>
       <p className='text-justify'>Comprehensive medication management services. We help you keep track of your prescriptions and dosages. Our pharmacists work with you to optimize your medication regimen.</p>
      </div>

   


      </div>


     
    </div>
        </div>
    );
};

export default OurServices;