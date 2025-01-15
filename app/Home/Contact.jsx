import React from 'react';
import team from '../../public/assets/images/team.png'
import Footer from './Footer';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section>
<hr />
        <div className='bg-blue-800 text-white lg:mt-10 mt-32'>

          <div className='w-10/12 mx-auto rounded-md bg-gray-300 lg:h-64 justify-between items-center lg:flex lg:px-10 lg:py-12 py-6 flex lg:flex-row flex-col-reverse  relative bottom-28'>

           <div>
           <div className='flex lg:flex-col flex-col justify-center lg:items-start items-center space-y-2'>
           <span className='text-blue-700'>Need Help</span>
            <h2 className='lg:text-4xl text-2xl text-black font-semibold'>We are here to help</h2>
            <span className='text-black text-center lg:text-start lg:text-lg text-sm'>Your health should not have to break the bank</span>
           </div>
            <div className='lg:flex-row flex justify-center lg:justify-normal lg:mt-4 mt-4'>
            <a href={`tel:+880 1742-504941`}><button className='bg-blue-800 lg:py-3 lg:px-3 px-3 py-2 rounded-md text-sm flex items-center gap-2'> 
              <Phone></Phone>
              Contact Us Now</button></a>
            </div>
           </div>

           <div>
            <Image alt='help' className='lg:w-52 w-32' width={200} height={200} src={team}></Image>
           </div>


          </div>



        <h4 className='mb-8 lg:ml-24 text-center lg:text-start'>About us</h4>
      <div className='mb-10 w-9/12 mx-auto'>

        <div className='lg:flex gap-10 items-center lg:gap-9 '>
          <p className='lg:w-8/12 leading-7 text-justify'>
          Desh Pharmacy is a trusted retail chain that focuses on providing high-quality pharmaceutical products and healthcare essentials to its customers. It prioritizes customer satisfaction by sourcing authentic and reliable medicines, ensuring safety, and offering excellent service standards. The pharmacy is committed to maintaining high ethical practices and creating a dependable healthcare experience for its clients. </p>
          <p className='lg:w-8/12 leading-7 text-justify mt-10 lg:mt-0'>
          Vertically integrated pharmaceutical businesses ensure quality control and operational efficiency by managing the entire supply chain, from importing raw materials or semi-finished products to assembly and retail operations.</p>
        </div>
      </div>
        <hr className='mb-16 w-11/12 mx-auto' />
      <Footer></Footer>
        </div>

      
    </section>
    );
};

export default Contact;